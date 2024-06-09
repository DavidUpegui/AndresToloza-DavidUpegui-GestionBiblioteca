import { BookWhereInput } from "../inputs/BookWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { LoanListRelationFilter } from "../inputs/LoanListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BookWhereUniqueInput {
    id?: string | undefined;
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    title?: StringFilter | undefined;
    author?: StringFilter | undefined;
    description?: StringFilter | undefined;
    category?: StringFilter | undefined;
    image?: StringFilter | undefined;
    quantityAvaiable?: IntFilter | undefined;
    userId?: StringFilter | undefined;
    loans?: LoanListRelationFilter | undefined;
    createdBy?: UserRelationFilter | undefined;
}
