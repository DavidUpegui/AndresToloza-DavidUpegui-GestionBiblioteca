"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const BookCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/BookCreateNestedManyWithoutCreatedByInput");
const LoanCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/LoanCreateNestedManyWithoutCreatedByInput");
const LoanCreateNestedManyWithoutUserInput_1 = require("../inputs/LoanCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let UserCreateInput = class UserCreateInput {
};
exports.UserCreateInput = UserCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutUserInput_1.LoanCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutUserInput_1.LoanCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "loans", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutCreatedByInput_1.LoanCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutCreatedByInput_1.LoanCreateNestedManyWithoutCreatedByInput)
], UserCreateInput.prototype, "createdLoans", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedManyWithoutCreatedByInput_1.BookCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateNestedManyWithoutCreatedByInput_1.BookCreateNestedManyWithoutCreatedByInput)
], UserCreateInput.prototype, "createdBooks", void 0);
exports.UserCreateInput = UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {})
], UserCreateInput);
