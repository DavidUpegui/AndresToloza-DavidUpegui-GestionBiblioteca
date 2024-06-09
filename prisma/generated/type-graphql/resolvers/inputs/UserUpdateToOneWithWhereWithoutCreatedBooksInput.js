"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutCreatedBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutCreatedBooksInput_1 = require("../inputs/UserUpdateWithoutCreatedBooksInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutCreatedBooksInput = class UserUpdateToOneWithWhereWithoutCreatedBooksInput {
};
exports.UserUpdateToOneWithWhereWithoutCreatedBooksInput = UserUpdateToOneWithWhereWithoutCreatedBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutCreatedBooksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCreatedBooksInput_1.UserUpdateWithoutCreatedBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCreatedBooksInput_1.UserUpdateWithoutCreatedBooksInput)
], UserUpdateToOneWithWhereWithoutCreatedBooksInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutCreatedBooksInput = UserUpdateToOneWithWhereWithoutCreatedBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCreatedBooksInput", {})
], UserUpdateToOneWithWhereWithoutCreatedBooksInput);
