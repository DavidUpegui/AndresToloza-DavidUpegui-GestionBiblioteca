import { Loan } from "../models/Loan";
import { User } from "../models/User";
import { BookCount } from "../resolvers/outputs/BookCount";
export declare class Book {
    id: string;
    title: string;
    author: string;
    description: string;
    category: string;
    image: string;
    quantityAvaiable: number;
    loans?: Loan[];
    userId: string;
    createdBy?: User;
    _count?: BookCount | null;
}
