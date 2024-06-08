import { Book, Loan, LoanStatus, User } from "@prisma/client";

export interface ExtendedLoan extends Loan{
    user:User
    book:Book
    status:LoanStatus

}


export interface LoanQuery{
    loans:ExtendedLoan[]
}