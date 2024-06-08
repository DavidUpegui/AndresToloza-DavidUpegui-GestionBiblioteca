"use client"
 
import * as React from "react"
 
import { Button } from "../ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { User } from "../../prisma/generated/type-graphql/models/User"
import { useQuery } from "@apollo/client"
import { UserQuery } from "../../types/ExtendedUser"
import { GET_USERS } from "../../graphql/queries/user"
 

 
// const statuses: User[] = [
//   {
//     value: "backlog",
//     label: "Backlog",
//   },
//   {
//     value: "todo",
//     label: "Todo",
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//   },
//   {
//     value: "done",
//     label: "Done",
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//   },
// ]
 
export function ComboboxUsers() {

    const { data, loading, error } = useQuery<UserQuery>(GET_USERS, {
        fetchPolicy: "cache-and-network",
      });

  const [open, setOpen] = React.useState(false)
  const [selectedUser, setSelectedUser] = React.useState<User | null>(
    null
  )
 
return (
    <div className="flex items-center space-x-4 text-black w-full">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[350px] justify-start ">
                        {selectedUser ? <>{selectedUser.email}</> : <>Select user</>}
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
                                            setSelectedUser(
                                                data?.users.find((user) => user.email === value) ||
                                                    null
                                            )
                                            setOpen(false)
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
    </div>
)
}