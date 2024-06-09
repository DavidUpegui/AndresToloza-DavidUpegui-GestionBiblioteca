import { UserCreateOrConnectWithoutCreatedLoansInput } from "../inputs/UserCreateOrConnectWithoutCreatedLoansInput";
import { UserCreateWithoutCreatedLoansInput } from "../inputs/UserCreateWithoutCreatedLoansInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCreatedLoansInput {
    create?: UserCreateWithoutCreatedLoansInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLoansInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
