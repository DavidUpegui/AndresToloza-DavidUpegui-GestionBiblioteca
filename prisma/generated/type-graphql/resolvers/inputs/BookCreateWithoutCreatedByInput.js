"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateNestedManyWithoutBookInput_1 = require("../inputs/LoanCreateNestedManyWithoutBookInput");
let BookCreateWithoutCreatedByInput = class BookCreateWithoutCreatedByInput {
};
exports.BookCreateWithoutCreatedByInput = BookCreateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutCreatedByInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutCreatedByInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutCreatedByInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutCreatedByInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutCreatedByInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookCreateWithoutCreatedByInput.prototype, "quantityAvaiable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateNestedManyWithoutBookInput_1.LoanCreateNestedManyWithoutBookInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateNestedManyWithoutBookInput_1.LoanCreateNestedManyWithoutBookInput)
], BookCreateWithoutCreatedByInput.prototype, "loans", void 0);
exports.BookCreateWithoutCreatedByInput = BookCreateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateWithoutCreatedByInput", {})
], BookCreateWithoutCreatedByInput);
