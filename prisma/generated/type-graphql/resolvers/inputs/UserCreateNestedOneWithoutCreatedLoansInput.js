"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCreatedLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCreatedLoansInput_1 = require("../inputs/UserCreateOrConnectWithoutCreatedLoansInput");
const UserCreateWithoutCreatedLoansInput_1 = require("../inputs/UserCreateWithoutCreatedLoansInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCreatedLoansInput = class UserCreateNestedOneWithoutCreatedLoansInput {
};
exports.UserCreateNestedOneWithoutCreatedLoansInput = UserCreateNestedOneWithoutCreatedLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput)
], UserCreateNestedOneWithoutCreatedLoansInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedLoansInput_1.UserCreateOrConnectWithoutCreatedLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCreatedLoansInput_1.UserCreateOrConnectWithoutCreatedLoansInput)
], UserCreateNestedOneWithoutCreatedLoansInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCreatedLoansInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutCreatedLoansInput = UserCreateNestedOneWithoutCreatedLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedLoansInput", {})
], UserCreateNestedOneWithoutCreatedLoansInput);
