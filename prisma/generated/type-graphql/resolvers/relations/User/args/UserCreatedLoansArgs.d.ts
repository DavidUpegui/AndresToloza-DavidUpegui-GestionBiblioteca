import { LoanOrderByWithRelationInput } from "../../../inputs/LoanOrderByWithRelationInput";
import { LoanWhereInput } from "../../../inputs/LoanWhereInput";
import { LoanWhereUniqueInput } from "../../../inputs/LoanWhereUniqueInput";
export declare class UserCreatedLoansArgs {
    where?: LoanWhereInput | undefined;
    orderBy?: LoanOrderByWithRelationInput[] | undefined;
    cursor?: LoanWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "bookId" | "status"> | undefined;
}
