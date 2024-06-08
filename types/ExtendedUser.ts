import { Book, Loan, LoanStatus, User } from "@prisma/client";

// export interface ExtendedLoan extends User{
//     user:User
//     book:Book
//     status:LoanStatus

// }


export interface UserQuery{
    users:User[]
}