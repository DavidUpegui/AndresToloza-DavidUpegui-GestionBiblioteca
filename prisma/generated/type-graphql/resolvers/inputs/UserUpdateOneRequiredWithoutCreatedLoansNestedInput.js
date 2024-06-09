"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCreatedLoansNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCreatedLoansInput_1 = require("../inputs/UserCreateOrConnectWithoutCreatedLoansInput");
const UserCreateWithoutCreatedLoansInput_1 = require("../inputs/UserCreateWithoutCreatedLoansInput");
const UserUpdateToOneWithWhereWithoutCreatedLoansInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutCreatedLoansInput");
const UserUpsertWithoutCreatedLoansInput_1 = require("../inputs/UserUpsertWithoutCreatedLoansInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCreatedLoansNestedInput = class UserUpdateOneRequiredWithoutCreatedLoansNestedInput {
};
exports.UserUpdateOneRequiredWithoutCreatedLoansNestedInput = UserUpdateOneRequiredWithoutCreatedLoansNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedLoansInput_1.UserCreateWithoutCreatedLoansInput)
], UserUpdateOneRequiredWithoutCreatedLoansNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedLoansInput_1.UserCreateOrConnectWithoutCreatedLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCreatedLoansInput_1.UserCreateOrConnectWithoutCreatedLoansInput)
], UserUpdateOneRequiredWithoutCreatedLoansNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCreatedLoansInput_1.UserUpsertWithoutCreatedLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCreatedLoansInput_1.UserUpsertWithoutCreatedLoansInput)
], UserUpdateOneRequiredWithoutCreatedLoansNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCreatedLoansNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCreatedLoansInput_1.UserUpdateToOneWithWhereWithoutCreatedLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutCreatedLoansInput_1.UserUpdateToOneWithWhereWithoutCreatedLoansInput)
], UserUpdateOneRequiredWithoutCreatedLoansNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutCreatedLoansNestedInput = UserUpdateOneRequiredWithoutCreatedLoansNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCreatedLoansNestedInput", {})
], UserUpdateOneRequiredWithoutCreatedLoansNestedInput);
