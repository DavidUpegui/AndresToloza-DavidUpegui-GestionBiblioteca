import { Book, Enum_RoleName, LoanStatus, User } from "@prisma/client";

// export interface ExtendedUser extends User{
//     // user:User
//     // book:Book
//     role:Enum_RoleName

// }


export interface UsersQuery{
    users:User[]
}