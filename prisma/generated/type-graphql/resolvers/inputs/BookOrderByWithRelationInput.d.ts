import { LoanOrderByRelationAggregateInput } from "../inputs/LoanOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class BookOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    quantityAvaiable?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    loans?: LoanOrderByRelationAggregateInput | undefined;
    createdBy?: UserOrderByWithRelationInput | undefined;
}
