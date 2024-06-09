"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateNestedOneWithoutLoansInput_1 = require("../inputs/BookCreateNestedOneWithoutLoansInput");
const UserCreateNestedOneWithoutCreatedLoansInput_1 = require("../inputs/UserCreateNestedOneWithoutCreatedLoansInput");
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanCreateWithoutUserInput = class LoanCreateWithoutUserInput {
};
exports.LoanCreateWithoutUserInput = LoanCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateWithoutUserInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutLoansInput_1.BookCreateNestedOneWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutLoansInput_1.BookCreateNestedOneWithoutLoansInput)
], LoanCreateWithoutUserInput.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedLoansInput_1.UserCreateNestedOneWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCreatedLoansInput_1.UserCreateNestedOneWithoutCreatedLoansInput)
], LoanCreateWithoutUserInput.prototype, "createdBy", void 0);
exports.LoanCreateWithoutUserInput = LoanCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateWithoutUserInput", {})
], LoanCreateWithoutUserInput);
