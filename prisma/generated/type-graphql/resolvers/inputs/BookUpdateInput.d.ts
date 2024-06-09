import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LoanUpdateManyWithoutBookNestedInput } from "../inputs/LoanUpdateManyWithoutBookNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCreatedBooksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedBooksNestedInput";
export declare class BookUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    author?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    category?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    quantityAvaiable?: IntFieldUpdateOperationsInput | undefined;
    loans?: LoanUpdateManyWithoutBookNestedInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutCreatedBooksNestedInput | undefined;
}
