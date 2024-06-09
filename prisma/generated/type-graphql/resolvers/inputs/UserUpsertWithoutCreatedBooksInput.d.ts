import { UserCreateWithoutCreatedBooksInput } from "../inputs/UserCreateWithoutCreatedBooksInput";
import { UserUpdateWithoutCreatedBooksInput } from "../inputs/UserUpdateWithoutCreatedBooksInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutCreatedBooksInput {
    update: UserUpdateWithoutCreatedBooksInput;
    create: UserCreateWithoutCreatedBooksInput;
    where?: UserWhereInput | undefined;
}
