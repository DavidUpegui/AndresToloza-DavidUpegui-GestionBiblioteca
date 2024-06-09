import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookScalarWhereInput {
    AND?: BookScalarWhereInput[] | undefined;
    OR?: BookScalarWhereInput[] | undefined;
    NOT?: BookScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    author?: StringFilter | undefined;
    description?: StringFilter | undefined;
    category?: StringFilter | undefined;
    image?: StringFilter | undefined;
    quantityAvaiable?: IntFilter | undefined;
    userId?: StringFilter | undefined;
}
