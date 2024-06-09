"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCreatedLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCreatedLoansInput_1 = require("../inputs/UserCreateWithoutCreatedLoansInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCreatedLoansInput = class UserCreateOrConnectWithoutCreatedLoansInput {
};
exports.UserCreateOrConnectWithoutCreatedLoansInput = UserCreateOrConnectWithoutCreatedLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCreatedLoansInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput)
], UserCreateOrConnectWithoutCreatedLoansInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutCreatedLoansInput = UserCreateOrConnectWithoutCreatedLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCreatedLoansInput", {})
], UserCreateOrConnectWithoutCreatedLoansInput);
