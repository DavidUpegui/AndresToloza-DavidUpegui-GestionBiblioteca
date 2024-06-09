"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookRelationFilter_1 = require("../inputs/BookRelationFilter");
const EnumLoanStatusFilter_1 = require("../inputs/EnumLoanStatusFilter");
const LoanWhereInput_1 = require("../inputs/LoanWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let LoanWhereUniqueInput = class LoanWhereUniqueInput {
};
exports.LoanWhereUniqueInput = LoanWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LoanWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereInput_1.LoanWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereInput_1.LoanWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereInput_1.LoanWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LoanWhereUniqueInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLoanStatusFilter_1.EnumLoanStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLoanStatusFilter_1.EnumLoanStatusFilter)
], LoanWhereUniqueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], LoanWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookRelationFilter_1.BookRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookRelationFilter_1.BookRelationFilter)
], LoanWhereUniqueInput.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], LoanWhereUniqueInput.prototype, "createdBy", void 0);
exports.LoanWhereUniqueInput = LoanWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanWhereUniqueInput", {})
], LoanWhereUniqueInput);
