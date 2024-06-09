import { UserCreateWithoutCreatedLoansInput } from "../inputs/UserCreateWithoutCreatedLoansInput";
import { UserUpdateWithoutCreatedLoansInput } from "../inputs/UserUpdateWithoutCreatedLoansInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutCreatedLoansInput {
    update: UserUpdateWithoutCreatedLoansInput;
    create: UserCreateWithoutCreatedLoansInput;
    where?: UserWhereInput | undefined;
}
