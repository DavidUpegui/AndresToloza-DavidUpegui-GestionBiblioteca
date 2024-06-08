import { Account } from "../models/Account";
import { Loan } from "../models/Loan";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | null;
    image?: string | null;
    role?: "ADMIN" | "USER" | null;
    accounts?: Account[];
    sessions?: Session[];
    createdAt: Date;
    updatedAt: Date;
    loans?: Loan[];
    _count?: UserCount | null;
}
