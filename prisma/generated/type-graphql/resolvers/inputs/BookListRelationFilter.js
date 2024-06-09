"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookListRelationFilter = class BookListRelationFilter {
};
exports.BookListRelationFilter = BookListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookListRelationFilter.prototype, "none", void 0);
exports.BookListRelationFilter = BookListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookListRelationFilter", {})
], BookListRelationFilter);
