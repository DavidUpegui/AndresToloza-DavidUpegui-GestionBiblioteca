import { Book } from "../models/Book";
import { User } from "../models/User";
export declare class Loan {
    id: string;
    userId: string;
    bookId: string;
    status: "PENDING" | "RETURNED";
    user?: User;
    book?: Book;
    createdBy?: User;
}
