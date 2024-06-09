"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateWithoutLoansInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCreatedBooksInput_1 = require("../inputs/UserCreateNestedOneWithoutCreatedBooksInput");
let BookCreateWithoutLoansInput = class BookCreateWithoutLoansInput {
};
exports.BookCreateWithoutLoansInput = BookCreateWithoutLoansInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutLoansInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutLoansInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutLoansInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutLoansInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutLoansInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutLoansInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookCreateWithoutLoansInput.prototype, "quantityAvaiable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedBooksInput_1.UserCreateNestedOneWithoutCreatedBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCreatedBooksInput_1.UserCreateNestedOneWithoutCreatedBooksInput)
], BookCreateWithoutLoansInput.prototype, "createdBy", void 0);
exports.BookCreateWithoutLoansInput = BookCreateWithoutLoansInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateWithoutLoansInput", {})
], BookCreateWithoutLoansInput);
