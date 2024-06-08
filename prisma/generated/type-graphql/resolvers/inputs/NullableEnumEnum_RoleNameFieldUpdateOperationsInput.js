"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumEnum_RoleNameFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_RoleName_1 = require("../../enums/Enum_RoleName");
let NullableEnumEnum_RoleNameFieldUpdateOperationsInput = class NullableEnumEnum_RoleNameFieldUpdateOperationsInput {
};
exports.NullableEnumEnum_RoleNameFieldUpdateOperationsInput = NullableEnumEnum_RoleNameFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_RoleName_1.Enum_RoleName, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumEnum_RoleNameFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumEnum_RoleNameFieldUpdateOperationsInput = NullableEnumEnum_RoleNameFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumEnum_RoleNameFieldUpdateOperationsInput", {})
], NullableEnumEnum_RoleNameFieldUpdateOperationsInput);
