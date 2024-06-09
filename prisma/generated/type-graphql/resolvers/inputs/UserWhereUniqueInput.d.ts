import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_RoleNameNullableFilter } from "../inputs/EnumEnum_RoleNameNullableFilter";
import { LoanListRelationFilter } from "../inputs/LoanListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringNullableFilter | undefined;
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
