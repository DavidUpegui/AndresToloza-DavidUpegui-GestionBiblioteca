"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RoleNameNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RoleNameNullableFilter_1 = require("../inputs/NestedEnumEnum_RoleNameNullableFilter");
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let EnumEnum_RoleNameNullableFilter = class EnumEnum_RoleNameNullableFilter {
};
exports.EnumEnum_RoleNameNullableFilter = EnumEnum_RoleNameNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RoleNameNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RoleNameNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RoleNameNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableFilter_1.NestedEnumEnum_RoleNameNullableFilter)
], EnumEnum_RoleNameNullableFilter.prototype, "not", void 0);
exports.EnumEnum_RoleNameNullableFilter = EnumEnum_RoleNameNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RoleNameNullableFilter", {})
], EnumEnum_RoleNameNullableFilter);
