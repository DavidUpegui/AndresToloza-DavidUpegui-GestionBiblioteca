"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const BookCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/BookCreateNestedManyWithoutCreatedByInput");
const LoanCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/LoanCreateNestedManyWithoutCreatedByInput");
const LoanCreateNestedManyWithoutUserInput_1 = require("../inputs/LoanCreateNestedManyWithoutUserInput");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {
};
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutUserInput_1.LoanCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutUserInput_1.LoanCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "loans", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutCreatedByInput_1.LoanCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutCreatedByInput_1.LoanCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutSessionsInput.prototype, "createdLoans", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedManyWithoutCreatedByInput_1.BookCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateNestedManyWithoutCreatedByInput_1.BookCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutSessionsInput.prototype, "createdBooks", void 0);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {})
], UserCreateWithoutSessionsInput);
