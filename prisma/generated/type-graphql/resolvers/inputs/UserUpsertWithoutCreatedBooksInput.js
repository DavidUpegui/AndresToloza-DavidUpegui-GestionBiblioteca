"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCreatedBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCreatedBooksInput_1 = require("../inputs/UserCreateWithoutCreatedBooksInput");
const UserUpdateWithoutCreatedBooksInput_1 = require("../inputs/UserUpdateWithoutCreatedBooksInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutCreatedBooksInput = class UserUpsertWithoutCreatedBooksInput {
};
exports.UserUpsertWithoutCreatedBooksInput = UserUpsertWithoutCreatedBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCreatedBooksInput_1.UserUpdateWithoutCreatedBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCreatedBooksInput_1.UserUpdateWithoutCreatedBooksInput)
], UserUpsertWithoutCreatedBooksInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedBooksInput_1.UserCreateWithoutCreatedBooksInput)
], UserUpsertWithoutCreatedBooksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutCreatedBooksInput.prototype, "where", void 0);
exports.UserUpsertWithoutCreatedBooksInput = UserUpsertWithoutCreatedBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCreatedBooksInput", {})
], UserUpsertWithoutCreatedBooksInput);
