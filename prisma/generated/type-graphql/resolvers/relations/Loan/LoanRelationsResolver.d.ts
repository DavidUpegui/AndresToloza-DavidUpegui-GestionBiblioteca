import type { GraphQLResolveInfo } from "graphql";
import { Book } from "../../../models/Book";
import { Loan } from "../../../models/Loan";
import { User } from "../../../models/User";
export declare class LoanRelationsResolver {
    user(loan: Loan, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    book(loan: Loan, ctx: any, info: GraphQLResolveInfo): Promise<Book>;
    createdBy(loan: Loan, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
