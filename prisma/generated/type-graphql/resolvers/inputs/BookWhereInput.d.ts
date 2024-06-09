import { IntFilter } from "../inputs/IntFilter";
import { LoanListRelationFilter } from "../inputs/LoanListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BookWhereInput {
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    id?: StringFilter | undefined;
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
