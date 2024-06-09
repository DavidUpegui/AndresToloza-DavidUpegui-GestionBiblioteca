"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumLoanStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumLoanStatusFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCreatedLoansNestedInput");
const UserUpdateOneRequiredWithoutLoansNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLoansNestedInput");
let LoanUpdateWithoutBookInput = class LoanUpdateWithoutBookInput {
};
exports.LoanUpdateWithoutBookInput = LoanUpdateWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LoanUpdateWithoutBookInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput)
], LoanUpdateWithoutBookInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLoansNestedInput_1.UserUpdateOneRequiredWithoutLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLoansNestedInput_1.UserUpdateOneRequiredWithoutLoansNestedInput)
], LoanUpdateWithoutBookInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1.UserUpdateOneRequiredWithoutCreatedLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1.UserUpdateOneRequiredWithoutCreatedLoansNestedInput)
], LoanUpdateWithoutBookInput.prototype, "createdBy", void 0);
exports.LoanUpdateWithoutBookInput = LoanUpdateWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateWithoutBookInput", {})
], LoanUpdateWithoutBookInput);
