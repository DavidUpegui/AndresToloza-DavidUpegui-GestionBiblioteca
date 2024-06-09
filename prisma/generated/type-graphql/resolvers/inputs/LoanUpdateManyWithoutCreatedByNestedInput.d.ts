import { LoanCreateManyCreatedByInputEnvelope } from "../inputs/LoanCreateManyCreatedByInputEnvelope";
import { LoanCreateOrConnectWithoutCreatedByInput } from "../inputs/LoanCreateOrConnectWithoutCreatedByInput";
import { LoanCreateWithoutCreatedByInput } from "../inputs/LoanCreateWithoutCreatedByInput";
import { LoanScalarWhereInput } from "../inputs/LoanScalarWhereInput";
import { LoanUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/LoanUpdateManyWithWhereWithoutCreatedByInput";
import { LoanUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/LoanUpdateWithWhereUniqueWithoutCreatedByInput";
import { LoanUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/LoanUpsertWithWhereUniqueWithoutCreatedByInput";
import { LoanWhereUniqueInput } from "../inputs/LoanWhereUniqueInput";
export declare class LoanUpdateManyWithoutCreatedByNestedInput {
    create?: LoanCreateWithoutCreatedByInput[] | undefined;
    connectOrCreate?: LoanCreateOrConnectWithoutCreatedByInput[] | undefined;
    upsert?: LoanUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;
    createMany?: LoanCreateManyCreatedByInputEnvelope | undefined;
    set?: LoanWhereUniqueInput[] | undefined;
    disconnect?: LoanWhereUniqueInput[] | undefined;
    delete?: LoanWhereUniqueInput[] | undefined;
    connect?: LoanWhereUniqueInput[] | undefined;
    update?: LoanUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;
    updateMany?: LoanUpdateManyWithWhereWithoutCreatedByInput[] | undefined;
    deleteMany?: LoanScalarWhereInput[] | undefined;
}
