import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { BookUpdateManyWithoutCreatedByNestedInput } from "../inputs/BookUpdateManyWithoutCreatedByNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LoanUpdateManyWithoutCreatedByNestedInput } from "../inputs/LoanUpdateManyWithoutCreatedByNestedInput";
import { LoanUpdateManyWithoutUserNestedInput } from "../inputs/LoanUpdateManyWithoutUserNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumEnum_RoleNameFieldUpdateOperationsInput } from "../inputs/NullableEnumEnum_RoleNameFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutSessionsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: NullableEnumEnum_RoleNameFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    loans?: LoanUpdateManyWithoutUserNestedInput | undefined;
    createdLoans?: LoanUpdateManyWithoutCreatedByNestedInput | undefined;
    createdBooks?: BookUpdateManyWithoutCreatedByNestedInput | undefined;
}
