import { ComboboxUsers } from "../../components/user-combobox/combo";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import React, { useState } from "react";
import { ComboboxBooks } from "../../components/book-combobox/combo";
import { CREATE_LOAN } from "../../graphql/mutations/loan";
import { useMutation } from "@apollo/client";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../../components/ui/toaster";
import classNames from "classnames";
import { Spinner } from "@radix-ui/themes";
import { GET_LOANS } from "../../graphql/queries/loans";
import { useSession } from "next-auth/react";

function CreatLoanDialog() {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [openDialog, setopenDialog] = useState<boolean>(false);
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const user = session?.user;

  const [createLoan, { data, loading, error }] = useMutation(CREATE_LOAN, {
    refetchQueries: [{ query: GET_LOANS }],
  });
  const router = useRouter();

  const submit = (): void => {
    console.log(selectedBook, selectedUser);
    createLoan({
      variables: {
        data: {
          status: "PENDING",
          user: {
            connect: {
              id: selectedUser.id,
            },
          },
          book: {
            connect: {
              id: selectedBook.id,
            },
          },
          createdBy: {
            connect: {
              id: (user as { id: string })?.id,
            },
          },
        },
        updateOneBookData2: {
          quantityAvaiable: {
            decrement: 1,
          },
        },
        where: {
          id: selectedBook.id,
        },
      },
    })
      .then((response) => {
        console.log("Loan created:", response.data.createOneLoan);
        toast({
          description: "Loan created successfully",
        });
        setopenDialog(!openDialog);
      })
      .catch((err) => {
        console.error("Error creating loan:", err);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };

  return (
    <Dialog open={openDialog}>
      <Button className="mb-5" onClick={() => setopenDialog(!openDialog)}>
        Create Loan
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Loan</DialogTitle>
          <DialogDescription>
            Select Book and Username to create a Loan. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Book
            </Label>
            <ComboboxBooks
              setSelectedBook={setSelectedBook}
              selectedBook={selectedBook}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <div className="flex items-center space-x-4 text-black w-full">
              <ComboboxUsers
                setSelectedUser={setSelectedUser}
                selectedUser={selectedUser}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-row-reverse">
              <Button onClick={submit}>Create Loan</Button>
              <Button
                className="mr-5"
                onClick={() => setopenDialog(!openDialog)}
              >
                Cancel
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}

export default CreatLoanDialog ;
