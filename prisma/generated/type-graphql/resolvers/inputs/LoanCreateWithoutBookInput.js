"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCreatedLoansInput_1 = require("../inputs/UserCreateNestedOneWithoutCreatedLoansInput");
const UserCreateNestedOneWithoutLoansInput_1 = require("../inputs/UserCreateNestedOneWithoutLoansInput");
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanCreateWithoutBookInput = class LoanCreateWithoutBookInput {
};
exports.LoanCreateWithoutBookInput = LoanCreateWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateWithoutBookInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateWithoutBookInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLoansInput_1.UserCreateNestedOneWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLoansInput_1.UserCreateNestedOneWithoutLoansInput)
], LoanCreateWithoutBookInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedLoansInput_1.UserCreateNestedOneWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCreatedLoansInput_1.UserCreateNestedOneWithoutCreatedLoansInput)
], LoanCreateWithoutBookInput.prototype, "createdBy", void 0);
exports.LoanCreateWithoutBookInput = LoanCreateWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateWithoutBookInput", {})
], LoanCreateWithoutBookInput);
