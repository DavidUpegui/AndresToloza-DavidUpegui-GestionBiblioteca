"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAvgAggregate_1 = require("../outputs/BookAvgAggregate");
const BookCountAggregate_1 = require("../outputs/BookCountAggregate");
const BookMaxAggregate_1 = require("../outputs/BookMaxAggregate");
const BookMinAggregate_1 = require("../outputs/BookMinAggregate");
const BookSumAggregate_1 = require("../outputs/BookSumAggregate");
let BookGroupBy = class BookGroupBy {
};
exports.BookGroupBy = BookGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookGroupBy.prototype, "quantityAvaiable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCountAggregate_1.BookCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCountAggregate_1.BookCountAggregate)
], BookGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAvgAggregate_1.BookAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAvgAggregate_1.BookAvgAggregate)
], BookGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookSumAggregate_1.BookSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookSumAggregate_1.BookSumAggregate)
], BookGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMinAggregate_1.BookMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMinAggregate_1.BookMinAggregate)
], BookGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMaxAggregate_1.BookMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMaxAggregate_1.BookMaxAggregate)
], BookGroupBy.prototype, "_max", void 0);
exports.BookGroupBy = BookGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookGroupBy", {})
], BookGroupBy);
