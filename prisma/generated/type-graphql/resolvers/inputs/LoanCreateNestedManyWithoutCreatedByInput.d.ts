import { LoanCreateManyCreatedByInputEnvelope } from "../inputs/LoanCreateManyCreatedByInputEnvelope";
import { LoanCreateOrConnectWithoutCreatedByInput } from "../inputs/LoanCreateOrConnectWithoutCreatedByInput";
import { LoanCreateWithoutCreatedByInput } from "../inputs/LoanCreateWithoutCreatedByInput";
import { LoanWhereUniqueInput } from "../inputs/LoanWhereUniqueInput";
export declare class LoanCreateNestedManyWithoutCreatedByInput {
    create?: LoanCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: LoanCreateOrConnectWithoutCreatedByInput[] | undefined;
    createMany?: LoanCreateManyCreatedByInputEnvelope | undefined;
    connect?: LoanWhereUniqueInput[] | undefined;
}
