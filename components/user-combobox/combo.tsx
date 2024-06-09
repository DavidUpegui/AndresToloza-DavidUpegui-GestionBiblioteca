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
import { UsersQuery } from "../../types/ExtendedUser";
import { GET_USERS } from "../../graphql/queries/user";

export function ComboboxUsers({
  setSelectedUser: setUser,
  selectedUser: userSelected,
}) {
  const { data, loading, error } = useQuery<UsersQuery>(GET_USERS, {
    fetchPolicy: "cache-and-network",
  });

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[350px] justify-start ">
              {userSelected ? <>{userSelected.email}</> : <>Select user</>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Search user..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {data?.users.map((user) => (
                    <CommandItem
                      key={user.id}
                      value={user.email}
                      onSelect={(value) => {
                        setUser(
                          data?.users.find((user) => user.email === value) ||
                            null
                        );
                        setOpen(false);
                      }}
                    >
                      {user.email}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
