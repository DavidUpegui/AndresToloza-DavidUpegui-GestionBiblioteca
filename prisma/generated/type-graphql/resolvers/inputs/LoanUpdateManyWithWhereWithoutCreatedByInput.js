"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateManyWithWhereWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanScalarWhereInput_1 = require("../inputs/LoanScalarWhereInput");
const LoanUpdateManyMutationInput_1 = require("../inputs/LoanUpdateManyMutationInput");
let LoanUpdateManyWithWhereWithoutCreatedByInput = class LoanUpdateManyWithWhereWithoutCreatedByInput {
};
exports.LoanUpdateManyWithWhereWithoutCreatedByInput = LoanUpdateManyWithWhereWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanScalarWhereInput_1.LoanScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanScalarWhereInput_1.LoanScalarWhereInput)
], LoanUpdateManyWithWhereWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateManyMutationInput_1.LoanUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateManyMutationInput_1.LoanUpdateManyMutationInput)
], LoanUpdateManyWithWhereWithoutCreatedByInput.prototype, "data", void 0);
exports.LoanUpdateManyWithWhereWithoutCreatedByInput = LoanUpdateManyWithWhereWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateManyWithWhereWithoutCreatedByInput", {})
], LoanUpdateManyWithWhereWithoutCreatedByInput);
