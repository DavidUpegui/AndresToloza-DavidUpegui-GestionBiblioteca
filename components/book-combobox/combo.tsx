"use client";

import * as React from "react";

import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { User } from "../../prisma/generated/type-graphql/models/User";
import { useQuery } from "@apollo/client";
import { BooksQuery } from "../../types/ExtendedBooks";
import { GET_BOOKS } from "../../graphql/queries/book";
import { Book } from "@prisma/client";

export function ComboboxBooks({setSelectedBook: setBook, selectedBook: bookSelected}) {
  const { data, loading, error } = useQuery<BooksQuery>(GET_BOOKS, {
    fetchPolicy: "cache-and-network",
  });

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center space-x-4 text-black w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[350px] justify-start ">
              {bookSelected ? <>{bookSelected.title}</> : <>Select book</>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Search book..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {data?.books.map((book) => (
                    <CommandItem
                      key={book.id}
                      value={book.title}
                      onSelect={(value) => {
                        setBook(
                          data?.books.find((book) => book.title === value) ||
                            null
                        );
                        setOpen(false);
                      }}
                    >
                      {book.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
