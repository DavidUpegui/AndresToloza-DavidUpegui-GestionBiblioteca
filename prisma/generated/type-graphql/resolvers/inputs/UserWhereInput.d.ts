import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_RoleNameNullableFilter } from "../inputs/EnumEnum_RoleNameNullableFilter";
import { LoanListRelationFilter } from "../inputs/LoanListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    role?: EnumEnum_RoleNameNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    loans?: LoanListRelationFilter | undefined;
    createdLoans?: LoanListRelationFilter | undefined;
    createdBooks?: BookListRelationFilter | undefined;
}
