import { BookUpdateOneRequiredWithoutLoansNestedInput } from "../inputs/BookUpdateOneRequiredWithoutLoansNestedInput";
import { EnumLoanStatusFieldUpdateOperationsInput } from "../inputs/EnumLoanStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLoansNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLoansNestedInput";
export declare class LoanUpdateWithoutCreatedByInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    status?: EnumLoanStatusFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutLoansNestedInput | undefined;
    book?: BookUpdateOneRequiredWithoutLoansNestedInput | undefined;
}
