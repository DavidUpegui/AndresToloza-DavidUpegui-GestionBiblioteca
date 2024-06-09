import { Book, LoanStatus, User} from "@prisma/client";

export interface ExtendedBook extends Book{
    user:User
    book:Book
    status:LoanStatus
    createdBy:User

}

export interface BooksQuery {
  books: ExtendedBook[];
}
