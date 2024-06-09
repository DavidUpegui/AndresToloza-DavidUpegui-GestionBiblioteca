import { ComboboxUsers } from "./user-combobox/combo";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import React, { useState } from "react";
import { ComboboxBooks } from "./book-combobox/combo";
import { CREATE_LOAN } from "../graphql/mutations/loan";
import { useMutation } from "@apollo/client";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";
import classNames from "classnames";
import { Spinner } from "@radix-ui/themes";
import { User } from "@prisma/client";
import { ComboboxRoles } from "./role-combobox";
import { UPDATE_USER_ROLE } from "../graphql/mutations/user";
import { GET_USERS } from "../graphql/queries/user";

function UpdateUserDialog({ userProp }: { userProp: User }) {
  console.log(userProp);
  const [selectedRole, setSelectedRole] = useState<any>(userProp.role);
  // const [selectedUser, setSelectedUser] = useState<any>(null);
  const [openDialog, setopenDialog] = useState<boolean>(false);

  const [updateUserRole, { data, loading, error }] =
    useMutation(UPDATE_USER_ROLE, {
      refetchQueries: [{ query: GET_USERS }],
    });
  const { toast } = useToast();
  const router = useRouter();

  const submit = (): void => {
    console.log(selectedRole);

    updateUserRole({
      variables: {
        data: {
          role: {
            set: selectedRole,
          },
        },
        where: {
          id: userProp.id,
        },
      },
    })
      .then((response) => {
        toast({
          description: "User updated successfully",
        });
        setopenDialog(!openDialog);
      })
      .catch((err) => {
        console.error("Error updating user:", err);
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
        Cambiar rol
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit user</DialogTitle>
          

          <DialogDescription>
            Select the new role for the user: {userProp.email}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Rol
            </Label>
            <ComboboxRoles
              setSelectedRole={setSelectedRole}
              selectedRole={selectedRole}
            />
          </div>
        </div>
        <DialogFooter>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-row-reverse">
              <Button onClick={submit}>Update user</Button>
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

export default UpdateUserDialog ;
