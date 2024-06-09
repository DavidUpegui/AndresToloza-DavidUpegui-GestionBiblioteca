import { BookCreateManyCreatedByInputEnvelope } from "../inputs/BookCreateManyCreatedByInputEnvelope";
import { BookCreateOrConnectWithoutCreatedByInput } from "../inputs/BookCreateOrConnectWithoutCreatedByInput";
import { BookCreateWithoutCreatedByInput } from "../inputs/BookCreateWithoutCreatedByInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/BookUpdateManyWithWhereWithoutCreatedByInput";
import { BookUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/BookUpdateWithWhereUniqueWithoutCreatedByInput";
import { BookUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/BookUpsertWithWhereUniqueWithoutCreatedByInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookUpdateManyWithoutCreatedByNestedInput {
    create?: BookCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutCreatedByInput[] | undefined;
    upsert?: BookUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;
    createMany?: BookCreateManyCreatedByInputEnvelope | undefined;
    set?: BookWhereUniqueInput[] | undefined;
    disconnect?: BookWhereUniqueInput[] | undefined;
    delete?: BookWhereUniqueInput[] | undefined;
    connect?: BookWhereUniqueInput[] | undefined;
    update?: BookUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;
    updateMany?: BookUpdateManyWithWhereWithoutCreatedByInput[] | undefined;
    deleteMany?: BookScalarWhereInput[] | undefined;
}
