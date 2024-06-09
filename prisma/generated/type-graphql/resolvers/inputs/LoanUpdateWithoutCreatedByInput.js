"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateOneRequiredWithoutLoansNestedInput_1 = require("../inputs/BookUpdateOneRequiredWithoutLoansNestedInput");
const EnumLoanStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumLoanStatusFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutLoansNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLoansNestedInput");
let LoanUpdateWithoutCreatedByInput = class LoanUpdateWithoutCreatedByInput {
};
exports.LoanUpdateWithoutCreatedByInput = LoanUpdateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LoanUpdateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput)
], LoanUpdateWithoutCreatedByInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLoansNestedInput_1.UserUpdateOneRequiredWithoutLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLoansNestedInput_1.UserUpdateOneRequiredWithoutLoansNestedInput)
], LoanUpdateWithoutCreatedByInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutLoansNestedInput_1.BookUpdateOneRequiredWithoutLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateOneRequiredWithoutLoansNestedInput_1.BookUpdateOneRequiredWithoutLoansNestedInput)
], LoanUpdateWithoutCreatedByInput.prototype, "book", void 0);
exports.LoanUpdateWithoutCreatedByInput = LoanUpdateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateWithoutCreatedByInput", {})
], LoanUpdateWithoutCreatedByInput);
