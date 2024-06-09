"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAvgOrderByAggregateInput_1 = require("../inputs/BookAvgOrderByAggregateInput");
const BookCountOrderByAggregateInput_1 = require("../inputs/BookCountOrderByAggregateInput");
const BookMaxOrderByAggregateInput_1 = require("../inputs/BookMaxOrderByAggregateInput");
const BookMinOrderByAggregateInput_1 = require("../inputs/BookMinOrderByAggregateInput");
const BookSumOrderByAggregateInput_1 = require("../inputs/BookSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookOrderByWithAggregationInput = class BookOrderByWithAggregationInput {
};
exports.BookOrderByWithAggregationInput = BookOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "quantityAvaiable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCountOrderByAggregateInput_1.BookCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCountOrderByAggregateInput_1.BookCountOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAvgOrderByAggregateInput_1.BookAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAvgOrderByAggregateInput_1.BookAvgOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMaxOrderByAggregateInput_1.BookMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMaxOrderByAggregateInput_1.BookMaxOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMinOrderByAggregateInput_1.BookMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMinOrderByAggregateInput_1.BookMinOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookSumOrderByAggregateInput_1.BookSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookSumOrderByAggregateInput_1.BookSumOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.BookOrderByWithAggregationInput = BookOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookOrderByWithAggregationInput", {})
], BookOrderByWithAggregationInput);
