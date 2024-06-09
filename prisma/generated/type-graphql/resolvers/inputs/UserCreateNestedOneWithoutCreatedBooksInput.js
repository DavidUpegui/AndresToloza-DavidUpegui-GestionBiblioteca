"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCreatedBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCreatedBooksInput_1 = require("../inputs/UserCreateOrConnectWithoutCreatedBooksInput");
const UserCreateWithoutCreatedBooksInput_1 = require("../inputs/UserCreateWithoutCreatedBooksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCreatedBooksInput = class UserCreateNestedOneWithoutCreatedBooksInput {
};
exports.UserCreateNestedOneWithoutCreatedBooksInput = UserCreateNestedOneWithoutCreatedBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput)
], UserCreateNestedOneWithoutCreatedBooksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedBooksInput_1.UserCreateOrConnectWithoutCreatedBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCreatedBooksInput_1.UserCreateOrConnectWithoutCreatedBooksInput)
], UserCreateNestedOneWithoutCreatedBooksInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCreatedBooksInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutCreatedBooksInput = UserCreateNestedOneWithoutCreatedBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedBooksInput", {})
], UserCreateNestedOneWithoutCreatedBooksInput);
