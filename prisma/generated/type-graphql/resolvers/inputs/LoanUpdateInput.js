"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateOneRequiredWithoutLoansNestedInput_1 = require("../inputs/BookUpdateOneRequiredWithoutLoansNestedInput");
const EnumLoanStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumLoanStatusFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCreatedLoansNestedInput");
const UserUpdateOneRequiredWithoutLoansNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLoansNestedInput");
let LoanUpdateInput = class LoanUpdateInput {
};
exports.LoanUpdateInput = LoanUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LoanUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFieldUpdateOperationsInput_1.EnumLoanStatusFieldUpdateOperationsInput)
], LoanUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLoansNestedInput_1.UserUpdateOneRequiredWithoutLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLoansNestedInput_1.UserUpdateOneRequiredWithoutLoansNestedInput)
], LoanUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutLoansNestedInput_1.BookUpdateOneRequiredWithoutLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateOneRequiredWithoutLoansNestedInput_1.BookUpdateOneRequiredWithoutLoansNestedInput)
], LoanUpdateInput.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1.UserUpdateOneRequiredWithoutCreatedLoansNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCreatedLoansNestedInput_1.UserUpdateOneRequiredWithoutCreatedLoansNestedInput)
], LoanUpdateInput.prototype, "createdBy", void 0);
exports.LoanUpdateInput = LoanUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateInput", {})
], LoanUpdateInput);
