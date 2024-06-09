import { Book } from "../outputs/Book";
import { User } from "../outputs/User";
export declare class CreateManyLoanAndReturnOutputType {
    id: string;
    userId: string;
    bookId: string;
    status: "PENDING" | "RETURNED";
    user: User;
    book: Book;
    createdBy: User;
}
