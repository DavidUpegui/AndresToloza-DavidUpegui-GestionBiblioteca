import { BookCreateNestedOneWithoutLoansInput } from "../inputs/BookCreateNestedOneWithoutLoansInput";
import { UserCreateNestedOneWithoutCreatedLoansInput } from "../inputs/UserCreateNestedOneWithoutCreatedLoansInput";
import { UserCreateNestedOneWithoutLoansInput } from "../inputs/UserCreateNestedOneWithoutLoansInput";
export declare class LoanCreateInput {
    id?: string | undefined;
    status: "PENDING" | "RETURNED";
    user: UserCreateNestedOneWithoutLoansInput;
    book: BookCreateNestedOneWithoutLoansInput;
    createdBy: UserCreateNestedOneWithoutCreatedLoansInput;
}
