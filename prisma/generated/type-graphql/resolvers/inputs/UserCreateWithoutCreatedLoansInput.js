"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutCreatedLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const BookCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/BookCreateNestedManyWithoutCreatedByInput");
const LoanCreateNestedManyWithoutUserInput_1 = require("../inputs/LoanCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let UserCreateWithoutCreatedLoansInput = class UserCreateWithoutCreatedLoansInput {
};
exports.UserCreateWithoutCreatedLoansInput = UserCreateWithoutCreatedLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCreatedLoansInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCreatedLoansInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCreatedLoansInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCreatedLoansInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCreatedLoansInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCreatedLoansInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCreatedLoansInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCreatedLoansInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutCreatedLoansInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutCreatedLoansInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutUserInput_1.LoanCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutUserInput_1.LoanCreateNestedManyWithoutUserInput)
], UserCreateWithoutCreatedLoansInput.prototype, "loans", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedManyWithoutCreatedByInput_1.BookCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateNestedManyWithoutCreatedByInput_1.BookCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutCreatedLoansInput.prototype, "createdBooks", void 0);
exports.UserCreateWithoutCreatedLoansInput = UserCreateWithoutCreatedLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutCreatedLoansInput", {})
], UserCreateWithoutCreatedLoansInput);
