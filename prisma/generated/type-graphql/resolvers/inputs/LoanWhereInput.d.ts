import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { EnumLoanStatusFilter } from "../inputs/EnumLoanStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class LoanWhereInput {
    AND?: LoanWhereInput[] | undefined;
    OR?: LoanWhereInput[] | undefined;
    NOT?: LoanWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    bookId?: StringFilter | undefined;
    status?: EnumLoanStatusFilter | undefined;
    user?: UserRelationFilter | undefined;
    book?: BookRelationFilter | undefined;
    createdBy?: UserRelationFilter | undefined;
}
