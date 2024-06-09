import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOANS_BY_USER } from "../../../graphql/queries/loans";
import { Spinner } from "@radix-ui/themes";
import { LoanQuery } from "../../../types/ExtendedLoan";
import { Badge } from "../../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import  CreatLoanDialog  from "../createLoanModal";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { UserWithRole } from '../../../types/User';


const LoansUserTable: React.FC = () => {
  const router = useRouter();

  const { query } = router;
  const { data, loading, error } = useQuery<LoanQuery>(GET_LOANS_BY_USER, {
    fetchPolicy: "cache-and-network",
    variables: {
      where: {
        userId: {
          equals: query.userId,
        },
      },
    },
  });

  const { data: session, status } = useSession();
 
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
        <p className="text-gray-600">
          Please, log in
        </p>
        <div className="flex justify-center mt-5">
          <Button onClick={() => router.push("/")}>Go login</Button>
        </div>
      </div>
    </div>
    );
  }
  const user: UserWithRole | undefined = session?.user;
  const role = user?.role;

  return (
    <div className="p-20">
      {loading ? (
        <Spinner className="mx-auto" />
      ) : (
        <div>
          <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl mb-20">
            List of loans
          </h1>
          <div>
            <div>
              <CreatLoanDialog></CreatLoanDialog>
            </div>
            <div className="border-2 border-gray-400 rounded-md shadow-border ">
              <Table>
                <TableCaption>A list of Loans</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-bold text-black">
                      ID
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Username
                    </TableHead>
                    <TableHead className="font-bold text-black">Book</TableHead>
                    <TableHead className="font-bold text-black">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.loans.map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell>{loan.id}</TableCell>
                      <TableCell>{loan.user.name}</TableCell>
                      <TableCell>{loan.book.title}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            loan.status === "PENDING"
                              ? "text-center text-black bg-yellow-500 rounded-md"
                              : loan.status === "RETURNED"
                                ? "text-center text-black bg-green-600 rounded-md"
                                : ""
                          }
                        >
                          {loan.status}
                        </Badge>
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

export default LoansUserTable;
