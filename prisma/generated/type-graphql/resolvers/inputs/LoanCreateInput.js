"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateNestedOneWithoutLoansInput_1 = require("../inputs/BookCreateNestedOneWithoutLoansInput");
const UserCreateNestedOneWithoutCreatedLoansInput_1 = require("../inputs/UserCreateNestedOneWithoutCreatedLoansInput");
const UserCreateNestedOneWithoutLoansInput_1 = require("../inputs/UserCreateNestedOneWithoutLoansInput");
const LoanStatus_1 = require("../../enums/LoanStatus");
let LoanCreateInput = class LoanCreateInput {
};
exports.LoanCreateInput = LoanCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LoanCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLoansInput_1.UserCreateNestedOneWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutLoansInput_1.UserCreateNestedOneWithoutLoansInput)
], LoanCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutLoansInput_1.BookCreateNestedOneWithoutLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutLoansInput_1.BookCreateNestedOneWithoutLoansInput)
], LoanCreateInput.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedLoansInput_1.UserCreateNestedOneWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCreatedLoansInput_1.UserCreateNestedOneWithoutCreatedLoansInput)
], LoanCreateInput.prototype, "createdBy", void 0);
exports.LoanCreateInput = LoanCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateInput", {})
], LoanCreateInput);
