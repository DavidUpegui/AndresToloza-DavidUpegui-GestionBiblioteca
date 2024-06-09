import { UserCreateOrConnectWithoutCreatedBooksInput } from "../inputs/UserCreateOrConnectWithoutCreatedBooksInput";
import { UserCreateWithoutCreatedBooksInput } from "../inputs/UserCreateWithoutCreatedBooksInput";
import { UserUpdateToOneWithWhereWithoutCreatedBooksInput } from "../inputs/UserUpdateToOneWithWhereWithoutCreatedBooksInput";
import { UserUpsertWithoutCreatedBooksInput } from "../inputs/UserUpsertWithoutCreatedBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCreatedBooksNestedInput {
    create?: UserCreateWithoutCreatedBooksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedBooksInput | undefined;
    upsert?: UserUpsertWithoutCreatedBooksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutCreatedBooksInput | undefined;
}
