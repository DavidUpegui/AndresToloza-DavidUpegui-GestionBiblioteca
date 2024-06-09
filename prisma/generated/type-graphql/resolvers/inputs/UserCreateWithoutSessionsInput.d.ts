import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BookCreateNestedManyWithoutCreatedByInput } from "../inputs/BookCreateNestedManyWithoutCreatedByInput";
import { LoanCreateNestedManyWithoutCreatedByInput } from "../inputs/LoanCreateNestedManyWithoutCreatedByInput";
import { LoanCreateNestedManyWithoutUserInput } from "../inputs/LoanCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    role?: "ADMIN" | "USER" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    loans?: LoanCreateNestedManyWithoutUserInput | undefined;
    createdLoans?: LoanCreateNestedManyWithoutCreatedByInput | undefined;
    createdBooks?: BookCreateNestedManyWithoutCreatedByInput | undefined;
}
