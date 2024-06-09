"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCreatedBooksNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCreatedBooksInput_1 = require("../inputs/UserCreateOrConnectWithoutCreatedBooksInput");
const UserCreateWithoutCreatedBooksInput_1 = require("../inputs/UserCreateWithoutCreatedBooksInput");
const UserUpdateToOneWithWhereWithoutCreatedBooksInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutCreatedBooksInput");
const UserUpsertWithoutCreatedBooksInput_1 = require("../inputs/UserUpsertWithoutCreatedBooksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCreatedBooksNestedInput = class UserUpdateOneRequiredWithoutCreatedBooksNestedInput {
};
exports.UserUpdateOneRequiredWithoutCreatedBooksNestedInput = UserUpdateOneRequiredWithoutCreatedBooksNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput)
], UserUpdateOneRequiredWithoutCreatedBooksNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedBooksInput_1.UserCreateOrConnectWithoutCreatedBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCreatedBooksInput_1.UserCreateOrConnectWithoutCreatedBooksInput)
], UserUpdateOneRequiredWithoutCreatedBooksNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCreatedBooksInput_1.UserUpsertWithoutCreatedBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCreatedBooksInput_1.UserUpsertWithoutCreatedBooksInput)
], UserUpdateOneRequiredWithoutCreatedBooksNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCreatedBooksNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCreatedBooksInput_1.UserUpdateToOneWithWhereWithoutCreatedBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutCreatedBooksInput_1.UserUpdateToOneWithWhereWithoutCreatedBooksInput)
], UserUpdateOneRequiredWithoutCreatedBooksNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutCreatedBooksNestedInput = UserUpdateOneRequiredWithoutCreatedBooksNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCreatedBooksNestedInput", {})
], UserUpdateOneRequiredWithoutCreatedBooksNestedInput);
