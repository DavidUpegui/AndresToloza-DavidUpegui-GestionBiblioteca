import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class LoanOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    bookId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    book?: BookOrderByWithRelationInput | undefined;
    createdBy?: UserOrderByWithRelationInput | undefined;
}
