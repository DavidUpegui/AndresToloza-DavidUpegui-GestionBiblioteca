import { BookCreateNestedOneWithoutLoansInput } from "../inputs/BookCreateNestedOneWithoutLoansInput";
import { UserCreateNestedOneWithoutCreatedLoansInput } from "../inputs/UserCreateNestedOneWithoutCreatedLoansInput";
export declare class LoanCreateWithoutUserInput {
    id?: string | undefined;
    status: "PENDING" | "RETURNED";
    book: BookCreateNestedOneWithoutLoansInput;
    createdBy: UserCreateNestedOneWithoutCreatedLoansInput;
}
