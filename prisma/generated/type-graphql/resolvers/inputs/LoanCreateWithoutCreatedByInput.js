"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateNestedOneWithoutLoansInput_1 = require("../inputs/BookCreateNestedOneWithoutLoansInput");
const UserCreateNestedOneWithoutLoansInput_1 = require("../inputs/UserCreateNestedOneWithoutLoansInput");
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanCreateWithoutCreatedByInput = class LoanCreateWithoutCreatedByInput {
};
exports.LoanCreateWithoutCreatedByInput = LoanCreateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateWithoutCreatedByInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLoansInput_1.UserCreateNestedOneWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLoansInput_1.UserCreateNestedOneWithoutLoansInput)
], LoanCreateWithoutCreatedByInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutLoansInput_1.BookCreateNestedOneWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutLoansInput_1.BookCreateNestedOneWithoutLoansInput)
], LoanCreateWithoutCreatedByInput.prototype, "book", void 0);
exports.LoanCreateWithoutCreatedByInput = LoanCreateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateWithoutCreatedByInput", {})
], LoanCreateWithoutCreatedByInput);
