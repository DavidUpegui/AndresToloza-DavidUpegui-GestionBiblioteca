import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOANS } from "../../graphql/queries/loans";
import { Spinner } from "@radix-ui/themes";
import { Loan } from "@prisma/client";
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
import { CreatLoanDialog } from "./createLoanModal";
const LoansTable: React.FC = () => {
  const { data, loading, error } = useQuery<LoanQuery>(GET_LOANS, {
    fetchPolicy: "cache-and-network",
  });

  //   const cellClass = classNames({
  //     'bg-yellow-300 rounded-md': loan.status === 'PENDING',
  //     'bg-green-300 rounded-md': loan.status === 'RETURNED',
  //   });

  console.log(data);
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
            <Table className=" border-4 border-gray-400 rounded shadow-border">
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
                  <TableHead className="font-bold text-black">Status</TableHead>
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
      )}
    </div>
  );
};

export default LoansTable;
