"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateManyCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookCreateManyCreatedByInput = class BookCreateManyCreatedByInput {
};
exports.BookCreateManyCreatedByInput = BookCreateManyCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyCreatedByInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyCreatedByInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyCreatedByInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyCreatedByInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyCreatedByInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookCreateManyCreatedByInput.prototype, "quantityAvaiable", void 0);
exports.BookCreateManyCreatedByInput = BookCreateManyCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateManyCreatedByInput", {})
], BookCreateManyCreatedByInput);
