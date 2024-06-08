import { NestedEnumEnum_RoleNameNullableFilter } from "../inputs/NestedEnumEnum_RoleNameNullableFilter";
import { NestedEnumEnum_RoleNameNullableWithAggregatesFilter } from "../inputs/NestedEnumEnum_RoleNameNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumEnum_RoleNameNullableWithAggregatesFilter {
    equals?: "ADMIN" | "USER" | undefined;
    in?: Array<"ADMIN" | "USER"> | undefined;
    notIn?: Array<"ADMIN" | "USER"> | undefined;
    not?: NestedEnumEnum_RoleNameNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumEnum_RoleNameNullableFilter | undefined;
    _max?: NestedEnumEnum_RoleNameNullableFilter | undefined;
}
