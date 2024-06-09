import { BookAvgOrderByAggregateInput } from "../inputs/BookAvgOrderByAggregateInput";
import { BookCountOrderByAggregateInput } from "../inputs/BookCountOrderByAggregateInput";
import { BookMaxOrderByAggregateInput } from "../inputs/BookMaxOrderByAggregateInput";
import { BookMinOrderByAggregateInput } from "../inputs/BookMinOrderByAggregateInput";
import { BookSumOrderByAggregateInput } from "../inputs/BookSumOrderByAggregateInput";
export declare class BookOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    quantityAvaiable?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: BookCountOrderByAggregateInput | undefined;
    _avg?: BookAvgOrderByAggregateInput | undefined;
    _max?: BookMaxOrderByAggregateInput | undefined;
    _min?: BookMinOrderByAggregateInput | undefined;
    _sum?: BookSumOrderByAggregateInput | undefined;
}
