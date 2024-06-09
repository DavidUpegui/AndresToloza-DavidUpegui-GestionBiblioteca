"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookRelationFilter_1 = require("../inputs/BookRelationFilter");
const EnumLoanStatusFilter_1 = require("../inputs/EnumLoanStatusFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let LoanWhereInput = class LoanWhereInput {
};
exports.LoanWhereInput = LoanWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanWhereInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFilter_1.EnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFilter_1.EnumLoanStatusFilter)
], LoanWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], LoanWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookRelationFilter_1.BookRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookRelationFilter_1.BookRelationFilter)
], LoanWhereInput.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], LoanWhereInput.prototype, "createdBy", void 0);
exports.LoanWhereInput = LoanWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanWhereInput", {})
], LoanWhereInput);
