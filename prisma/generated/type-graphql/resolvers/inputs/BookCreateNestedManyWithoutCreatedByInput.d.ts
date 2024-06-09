import { BookCreateManyCreatedByInputEnvelope } from "../inputs/BookCreateManyCreatedByInputEnvelope";
import { BookCreateOrConnectWithoutCreatedByInput } from "../inputs/BookCreateOrConnectWithoutCreatedByInput";
import { BookCreateWithoutCreatedByInput } from "../inputs/BookCreateWithoutCreatedByInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookCreateNestedManyWithoutCreatedByInput {
    create?: BookCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutCreatedByInput[] | undefined;
    createMany?: BookCreateManyCreatedByInputEnvelope | undefined;
    connect?: BookWhereUniqueInput[] | undefined;
}
