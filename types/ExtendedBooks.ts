import { Book} from "@prisma/client";

// export interface ExtendedLoan extends User{
//     user:User
//     book:Book
//     status:LoanStatus

// }

export interface BooksQuery {
  books: Book[];
}
