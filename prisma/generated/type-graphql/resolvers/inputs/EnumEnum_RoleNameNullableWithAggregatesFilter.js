"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RoleNameNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RoleNameNullableFilter_1 = require("../inputs/NestedEnumEnum_RoleNameNullableFilter");
const NestedEnumEnum_RoleNameNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_RoleNameNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let EnumEnum_RoleNameNullableWithAggregatesFilter = class EnumEnum_RoleNameNullableWithAggregatesFilter {
};
exports.EnumEnum_RoleNameNullableWithAggregatesFilter = EnumEnum_RoleNameNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableWithAggregatesFilter_1.NestedEnumEnum_RoleNameNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableWithAggregatesFilter_1.NestedEnumEnum_RoleNameNullableWithAggregatesFilter)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter)
], EnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumEnum_RoleNameNullableWithAggregatesFilter = EnumEnum_RoleNameNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RoleNameNullableWithAggregatesFilter", {})
], EnumEnum_RoleNameNullableWithAggregatesFilter);
