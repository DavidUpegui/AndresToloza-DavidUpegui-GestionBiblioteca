"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCreatedBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCreatedBooksInput_1 = require("../inputs/UserCreateWithoutCreatedBooksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCreatedBooksInput = class UserCreateOrConnectWithoutCreatedBooksInput {
};
exports.UserCreateOrConnectWithoutCreatedBooksInput = UserCreateOrConnectWithoutCreatedBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCreatedBooksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput)
], UserCreateOrConnectWithoutCreatedBooksInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutCreatedBooksInput = UserCreateOrConnectWithoutCreatedBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCreatedBooksInput", {})
], UserCreateOrConnectWithoutCreatedBooksInput);
