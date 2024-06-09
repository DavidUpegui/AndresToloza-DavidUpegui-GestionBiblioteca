import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCreatedBooksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedBooksNestedInput";
export declare class BookUpdateWithoutLoansInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    author?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    category?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    quantityAvaiable?: IntFieldUpdateOperationsInput | undefined;
    createdBy?: UserUpdateOneRequiredWithoutCreatedBooksNestedInput | undefined;
}
