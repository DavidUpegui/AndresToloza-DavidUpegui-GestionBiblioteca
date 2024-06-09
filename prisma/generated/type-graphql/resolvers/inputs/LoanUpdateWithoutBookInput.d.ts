import { EnumLoanStatusFieldUpdateOperationsInput } from "../inputs/EnumLoanStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCreatedLoansNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedLoansNestedInput";
import { UserUpdateOneRequiredWithoutLoansNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLoansNestedInput";
export declare class LoanUpdateWithoutBookInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    status?: EnumLoanStatusFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutLoansNestedInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutCreatedLoansNestedInput | undefined;
}
