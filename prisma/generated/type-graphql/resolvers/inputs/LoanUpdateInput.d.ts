import { BookUpdateOneRequiredWithoutLoansNestedInput } from "../inputs/BookUpdateOneRequiredWithoutLoansNestedInput";
import { EnumLoanStatusFieldUpdateOperationsInput } from "../inputs/EnumLoanStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCreatedLoansNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedLoansNestedInput";
import { UserUpdateOneRequiredWithoutLoansNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLoansNestedInput";
export declare class LoanUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    status?: EnumLoanStatusFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutLoansNestedInput | undefined;
    book?: BookUpdateOneRequiredWithoutLoansNestedInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutCreatedLoansNestedInput | undefined;
}
