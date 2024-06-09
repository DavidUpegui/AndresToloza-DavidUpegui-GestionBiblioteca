"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCreatedLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCreatedLoansInput_1 = require("../inputs/UserCreateWithoutCreatedLoansInput");
const UserUpdateWithoutCreatedLoansInput_1 = require("../inputs/UserUpdateWithoutCreatedLoansInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutCreatedLoansInput = class UserUpsertWithoutCreatedLoansInput {
};
exports.UserUpsertWithoutCreatedLoansInput = UserUpsertWithoutCreatedLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCreatedLoansInput_1.UserUpdateWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCreatedLoansInput_1.UserUpdateWithoutCreatedLoansInput)
], UserUpsertWithoutCreatedLoansInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput)
], UserUpsertWithoutCreatedLoansInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutCreatedLoansInput.prototype, "where", void 0);
exports.UserUpsertWithoutCreatedLoansInput = UserUpsertWithoutCreatedLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCreatedLoansInput", {})
], UserUpsertWithoutCreatedLoansInput);
