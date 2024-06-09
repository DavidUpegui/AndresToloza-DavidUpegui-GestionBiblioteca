import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookScalarWhereWithAggregatesInput {
    AND?: BookScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    author?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    category?: StringWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    quantityAvaiable?: IntWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
