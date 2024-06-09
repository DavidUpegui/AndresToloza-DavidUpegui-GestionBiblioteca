import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { EnumLoanStatusFilter } from "../inputs/EnumLoanStatusFilter";
import { LoanWhereInput } from "../inputs/LoanWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class LoanWhereUniqueInput {
    id?: string | undefined;
    AND?: LoanWhereInput[] | undefined;
    OR?: LoanWhereInput[] | undefined;
    NOT?: LoanWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    bookId?: StringFilter | undefined;
    status?: EnumLoanStatusFilter | undefined;
    user?: UserRelationFilter | undefined;
    book?: BookRelationFilter | undefined;
    createdBy?: UserRelationFilter | undefined;
}
