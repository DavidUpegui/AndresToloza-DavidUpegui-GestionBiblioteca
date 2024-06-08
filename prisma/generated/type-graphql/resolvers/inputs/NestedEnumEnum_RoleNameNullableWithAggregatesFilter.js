"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_RoleNameNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RoleNameNullableFilter_1 = require("../inputs/NestedEnumEnum_RoleNameNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let NestedEnumEnum_RoleNameNullableWithAggregatesFilter = class NestedEnumEnum_RoleNameNullableWithAggregatesFilter {
};
exports.NestedEnumEnum_RoleNameNullableWithAggregatesFilter = NestedEnumEnum_RoleNameNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableWithAggregatesFilter)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter)
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumEnum_RoleNameNullableWithAggregatesFilter = NestedEnumEnum_RoleNameNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_RoleNameNullableWithAggregatesFilter", {})
], NestedEnumEnum_RoleNameNullableWithAggregatesFilter);
