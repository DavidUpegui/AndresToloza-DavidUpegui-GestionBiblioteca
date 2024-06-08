"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_RoleNameNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let NestedEnumEnum_RoleNameNullableFilter = class NestedEnumEnum_RoleNameNullableFilter {
};
exports.NestedEnumEnum_RoleNameNullableFilter = NestedEnumEnum_RoleNameNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_RoleNameNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_RoleName_1.Enum_RoleName], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RoleNameNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RoleNameNullableFilter)
], NestedEnumEnum_RoleNameNullableFilter.prototype, "not", void 0);
exports.NestedEnumEnum_RoleNameNullableFilter = NestedEnumEnum_RoleNameNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_RoleNameNullableFilter", {})
], NestedEnumEnum_RoleNameNullableFilter);
