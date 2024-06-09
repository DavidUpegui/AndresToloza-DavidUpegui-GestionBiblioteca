import { UserCreateOrConnectWithoutCreatedLoansInput } from "../inputs/UserCreateOrConnectWithoutCreatedLoansInput";
import { UserCreateWithoutCreatedLoansInput } from "../inputs/UserCreateWithoutCreatedLoansInput";
import { UserUpdateToOneWithWhereWithoutCreatedLoansInput } from "../inputs/UserUpdateToOneWithWhereWithoutCreatedLoansInput";
import { UserUpsertWithoutCreatedLoansInput } from "../inputs/UserUpsertWithoutCreatedLoansInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCreatedLoansNestedInput {
    create?: UserCreateWithoutCreatedLoansInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLoansInput | undefined;
    upsert?: UserUpsertWithoutCreatedLoansInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutCreatedLoansInput | undefined;
}
