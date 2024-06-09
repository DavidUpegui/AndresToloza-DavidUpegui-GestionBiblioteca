import { BookUpdateOneRequiredWithoutLoansNestedInput } from "../inputs/BookUpdateOneRequiredWithoutLoansNestedInput";
import { EnumLoanStatusFieldUpdateOperationsInput } from "../inputs/EnumLoanStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCreatedLoansNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedLoansNestedInput";
export declare class LoanUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    status?: EnumLoanStatusFieldUpdateOperationsInput | undefined;
    book?: BookUpdateOneRequiredWithoutLoansNestedInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutCreatedLoansNestedInput | undefined;
}
