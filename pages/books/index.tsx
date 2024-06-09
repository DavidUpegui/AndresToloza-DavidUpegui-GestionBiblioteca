import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LOANS } from "../../graphql/queries/loans";
import { Spinner } from "@radix-ui/themes";
import { Loan } from "@prisma/client";
import { ExtendedLoan, LoanQuery } from "../../types/ExtendedLoan";
import classNames from "classnames";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import CreateBookModal from "./createBookModal";
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
import { GET_BOOKS } from "../../graphql/queries/book";
import { BooksQuery } from "../../types/ExtendedBooks";
import { DELETE_BOOK, DELETE_BOOK_UNIT } from "../../graphql/mutations/book";
import { toast, useToast } from "../../components/ui/use-toast";
import { Toaster } from "../../components/ui/toaster";

const BooksTable: React.FC = () => {
  const { data, loading, error } = useQuery<BooksQuery>(GET_BOOKS, {
    fetchPolicy: "cache-and-network",
  });
  const [deleteBook, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_BOOK, {
      refetchQueries: [{ query: GET_BOOKS }],
    });

  const [
    deleteBookUnit,
    { loading: deleteUnitLoading, error: deleteUnitError },
  ] = useMutation(DELETE_BOOK_UNIT, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const { toast } = useToast();

  const deleteAll = (id: string) => {
    const variables = {
      where: {
        id: id,
      },
    };

    deleteBook({ variables })
      .then(() => {
        toast({
          description: "Book deleted successfully",
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

  const deleteUnit = (id: string) => {
    const variables = {
      data: {
        quantityAvaiable: {
          decrement: 1,
        },
      },
      where: {
        id: id,
      },
    };

    deleteBookUnit({ variables })
      .then(() => {
        toast({
          description: "Unit removed successfully",
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

  return (
    <div className="p-20">
      {loading ? (
        <Spinner className="mx-auto" />
      ) : (
        <div>
          <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl mb-20">
            List of books
          </h1>
          <div>
            <div>{<CreateBookModal></CreateBookModal>}</div>
            <div className="border-2 border-gray-400 rounded-md shadow-border ">
              <Table>
                <TableCaption>Lista de libros existentes</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-bold text-black">
                      ID
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Title
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Author
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Units available
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Delete All
                    </TableHead>
                    <TableHead className="font-bold text-black">
                      Change available
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.books.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.id}</TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.quantityAvaiable}</TableCell>
                      <TableCell>
                        {deleteLoading ? (
                          <Spinner className="mx-auto" />
                        ) : (
                          <Button
                            onClick={() => deleteAll(book.id)}
                            className="mb-5"
                            variant="destructive"
                          >
                            Delete All
                          </Button>
                        )}
                      </TableCell>
                      {book.quantityAvaiable > 0 && (
                        <TableCell>
                          {deleteUnitLoading ? (
                            <Spinner className="mx-auto" />
                          ) : (
                            <Button
                              onClick={() => deleteUnit(book.id)}
                              className="mb-5"
                              variant="destructive"
                            >
                              Delete one unit
                            </Button>
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Toaster />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksTable;
