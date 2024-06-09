import { UserCreateOrConnectWithoutCreatedBooksInput } from "../inputs/UserCreateOrConnectWithoutCreatedBooksInput";
import { UserCreateWithoutCreatedBooksInput } from "../inputs/UserCreateWithoutCreatedBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCreatedBooksInput {
    create?: UserCreateWithoutCreatedBooksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedBooksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
