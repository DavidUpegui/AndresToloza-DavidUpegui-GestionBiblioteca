import { NestedEnumEnum_RoleNameNullableFilter } from "../inputs/NestedEnumEnum_RoleNameNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumEnum_RoleNameNullableWithAggregatesFilter {
    equals?: "ADMIN" | "USER" | undefined;
    in?: Array<"ADMIN" | "USER"> | undefined;
    notIn?: Array<"ADMIN" | "USER"> | undefined;
    not?: NestedEnumEnum_RoleNameNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumEnum_RoleNameNullableFilter | undefined;
    _max?: NestedEnumEnum_RoleNameNullableFilter | undefined;
}
