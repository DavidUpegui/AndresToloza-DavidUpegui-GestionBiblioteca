import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK_MUTATION } from "../../graphql/mutations/book";

import { ComboboxUsers } from "../user-combobox/combo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ComboboxBooks } from "../book-combobox/combo";
import { CREATE_LOAN } from "../../graphql/mutations/loan";
import { useToast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";
import classNames from "classnames";
import { Spinner } from "@radix-ui/themes";
import { GET_BOOKS } from "../../graphql/queries/book";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { UserWithRole } from "@/types/User";

const CreateBookModal: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [quantityAvaiable, setQuantityAvailable] = useState(0);

  const [openDialog, setopenDialog] = useState<boolean>(false);
  const { toast } = useToast();

  const [addBook, { loading, error }] = useMutation(ADD_BOOK_MUTATION, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const variables = {
      data: {
        title,
        author,
        description,
        category,
        image,
        quantityAvaiable: Number(quantityAvaiable),
        createdBy: {
          connect: {
            id: (user as { id: string })?.id,
          },
        },
      },
    };

    addBook({ variables })
      .then(() => {
        setopenDialog(!openDialog);
        toast({
          description: "Book added successfully!",
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Spinner className="mx-auto" />;
  }

  const user: UserWithRole | undefined = session?.user;
  const role = user?.role;

  return (
    <Dialog open={openDialog}>
      {role === "ADMIN" && (
        <Button className="mb-5" onClick={() => setopenDialog(!openDialog)}>
          Create Book
        </Button>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Book</DialogTitle>
          <DialogDescription>
            Complete the inputs for the creation of the book
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input onChange={(e) => setTitle(e.target.value)}></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Author
            </Label>
            <Input onChange={(e) => setAuthor(e.target.value)}></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input onChange={(e) => setDescription(e.target.value)}></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Category
            </Label>
            <Input onChange={(e) => setCategory(e.target.value)}></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Image URL
            </Label>
            <Input onChange={(e) => setImage(e.target.value)}></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Quantity Avaiable
            </Label>
            <Input
              onChange={(e) => setQuantityAvailable(Number(e.target.value))}
              type="number"
            ></Input>
          </div>
        </div>
        <DialogFooter>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-row-reverse">
              <Button onClick={handleSubmit}>Create Book</Button>
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
};

export default CreateBookModal;
