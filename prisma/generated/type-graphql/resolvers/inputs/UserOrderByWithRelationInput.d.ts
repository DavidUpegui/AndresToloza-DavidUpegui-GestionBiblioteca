import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { BookOrderByRelationAggregateInput } from "../inputs/BookOrderByRelationAggregateInput";
import { LoanOrderByRelationAggregateInput } from "../inputs/LoanOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    role?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    loans?: LoanOrderByRelationAggregateInput | undefined;
    createdLoans?: LoanOrderByRelationAggregateInput | undefined;
    createdBooks?: BookOrderByRelationAggregateInput | undefined;
}
