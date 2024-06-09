import { BookCreateNestedOneWithoutLoansInput } from "../inputs/BookCreateNestedOneWithoutLoansInput";
import { UserCreateNestedOneWithoutLoansInput } from "../inputs/UserCreateNestedOneWithoutLoansInput";
export declare class LoanCreateWithoutCreatedByInput {
    id?: string | undefined;
    status: "PENDING" | "RETURNED";
    user: UserCreateNestedOneWithoutLoansInput;
    book: BookCreateNestedOneWithoutLoansInput;
}
