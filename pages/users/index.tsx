import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOANS } from "../../graphql/queries/loans";
import { Spinner } from "@radix-ui/themes";
import { Loan, User } from "@prisma/client";
import { ExtendedLoan, LoanQuery } from "../../types/ExtendedLoan";
import classNames from "classnames";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import UpdateUserDialog from "../../components/updateUserModal";
import { GET_USERS } from "../../graphql/queries/user";
import { UsersQuery } from "../../types/ExtendedUser";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserWithRole } from "@/types/User";

const LoansTable: React.FC = () => {
  const { data, loading, error } = useQuery<UsersQuery>(GET_USERS, {
    fetchPolicy: "cache-and-network",
  });

  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <Spinner className="mx-auto" />;
  }

  if (!session) {
    console.log("No hay sesión");
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-4 rounded-md">
          <h1 className="text-xl font-bold mb-2">
            You must log in for this resource
          </h1>
          <p className="text-gray-600">Please, log in</p>
          <div className="flex justify-center mt-5">
            <Button onClick={() => router.push("/")}>Go login</Button>
          </div>
        </div>
      </div>
    );
  }

  const user: UserWithRole | undefined = session?.user;
  const role = user?.role || "";

  if (role !== "ADMIN") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-4 rounded-md">
          <h1 className="text-xl font-bold mb-2">
            You have no access for this resource
          </h1>
          <div className="flex justify-center mt-5">
            <Button onClick={() => router.push("/")}>Go Home</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-20">
      {loading ? (
        <Spinner className="mx-auto" />
      ) : (
        <div>
          <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl mb-20">
            List of Users
          </h1>
          <div>
            <div></div>
            <div className="border-2 border-gray-400 rounded-md shadow-border ">
              <Table>
                <TableCaption>A list of Users</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-bold text-black">
                      ID
                    </TableHead>
                    <TableHead className="font-bold text-black">Name</TableHead>
                    <TableHead className="font-bold text-black">
                      email
                    </TableHead>
                    <TableHead className="font-bold text-black">Role</TableHead>
                    <TableHead className="font-bold text-black">
                      Created At
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Change Role
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            user.role === "USER"
                              ? "text-center text-black bg-yellow-500 rounded-md"
                              : user.role === "ADMIN"
                                ? "text-center text-black bg-green-600 rounded-md"
                                : ""
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(user.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <UpdateUserDialog userProp={user}></UpdateUserDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoansTable;
