"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutCreatedLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutCreatedLoansInput_1 = require("../inputs/UserUpdateWithoutCreatedLoansInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutCreatedLoansInput = class UserUpdateToOneWithWhereWithoutCreatedLoansInput {
};
exports.UserUpdateToOneWithWhereWithoutCreatedLoansInput = UserUpdateToOneWithWhereWithoutCreatedLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutCreatedLoansInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCreatedLoansInput_1.UserUpdateWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCreatedLoansInput_1.UserUpdateWithoutCreatedLoansInput)
], UserUpdateToOneWithWhereWithoutCreatedLoansInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutCreatedLoansInput = UserUpdateToOneWithWhereWithoutCreatedLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCreatedLoansInput", {})
], UserUpdateToOneWithWhereWithoutCreatedLoansInput);
