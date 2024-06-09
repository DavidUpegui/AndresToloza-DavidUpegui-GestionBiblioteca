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

import { Book, Enum_RoleName } from "@prisma/client";

export function ComboboxRoles({setSelectedRole: setRole, selectedRole: roleSelected}: {setSelectedRole: React.Dispatch<React.SetStateAction<string>>, selectedRole: string}) {
  

  const roles= Enum_RoleName
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center space-x-4 text-black w-full">
     
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[350px] justify-start ">
              {roleSelected ? <>{roleSelected}</> : <>Select role</>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Search role..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {Object.values(roles)?.map((role) => (
                        <CommandItem
                            key={role}
                            value={role}
                            onSelect={(value) => {
                                setRole(value);
                                setOpen(false);
                            }}
                        >
                            {role}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
     
    </div>
  );
}
