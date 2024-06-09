import { LoanCreateNestedManyWithoutBookInput } from "../inputs/LoanCreateNestedManyWithoutBookInput";
import { UserCreateNestedOneWithoutCreatedBooksInput } from "../inputs/UserCreateNestedOneWithoutCreatedBooksInput";
export declare class BookCreateInput {
    id?: string | undefined;
    title: string;
    author: string;
    description: string;
    category: string;
    image: string;
    quantityAvaiable: number;
    loans?: LoanCreateNestedManyWithoutBookInput | undefined;
    createdBy: UserCreateNestedOneWithoutCreatedBooksInput;
}
