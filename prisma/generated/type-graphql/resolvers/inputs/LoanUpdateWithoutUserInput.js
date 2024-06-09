"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateOneRequiredWithoutLoansNestedInput_1 = require("../inputs/BookUpdateOneRequiredWithoutLoansNestedInput");
const EnumLoanStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumLoanStatusFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCreatedLoansNestedInput");
let LoanUpdateWithoutUserInput = class LoanUpdateWithoutUserInput {
};
exports.LoanUpdateWithoutUserInput = LoanUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LoanUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput)
], LoanUpdateWithoutUserInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutLoansNestedInput_1.BookUpdateOneRequiredWithoutLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateOneRequiredWithoutLoansNestedInput_1.BookUpdateOneRequiredWithoutLoansNestedInput)
], LoanUpdateWithoutUserInput.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1.UserUpdateOneRequiredWithoutCreatedLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1.UserUpdateOneRequiredWithoutCreatedLoansNestedInput)
], LoanUpdateWithoutUserInput.prototype, "createdBy", void 0);
exports.LoanUpdateWithoutUserInput = LoanUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateWithoutUserInput", {})
], LoanUpdateWithoutUserInput);
