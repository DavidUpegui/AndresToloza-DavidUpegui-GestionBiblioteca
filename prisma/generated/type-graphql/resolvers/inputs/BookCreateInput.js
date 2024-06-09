"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateNestedManyWithoutBookInput_1 = require("../inputs/LoanCreateNestedManyWithoutBookInput");
const UserCreateNestedOneWithoutCreatedBooksInput_1 = require("../inputs/UserCreateNestedOneWithoutCreatedBooksInput");
let BookCreateInput = class BookCreateInput {
};
exports.BookCreateInput = BookCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookCreateInput.prototype, "quantityAvaiable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutBookInput_1.LoanCreateNestedManyWithoutBookInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutBookInput_1.LoanCreateNestedManyWithoutBookInput)
], BookCreateInput.prototype, "loans", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedBooksInput_1.UserCreateNestedOneWithoutCreatedBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCreatedBooksInput_1.UserCreateNestedOneWithoutCreatedBooksInput)
], BookCreateInput.prototype, "createdBy", void 0);
exports.BookCreateInput = BookCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateInput", {})
], BookCreateInput);
