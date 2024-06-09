import { UserCreateNestedOneWithoutCreatedBooksInput } from "../inputs/UserCreateNestedOneWithoutCreatedBooksInput";
export declare class BookCreateWithoutLoansInput {
    id?: string | undefined;
    title: string;
    author: string;
    description: string;
    category: string;
    image: string;
    quantityAvaiable: number;
    createdBy: UserCreateNestedOneWithoutCreatedBooksInput;
}
