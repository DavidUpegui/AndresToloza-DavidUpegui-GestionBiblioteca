"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanUpdateWithoutCreatedByInput_1 = require("../inputs/LoanUpdateWithoutCreatedByInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpdateWithWhereUniqueWithoutCreatedByInput = class LoanUpdateWithWhereUniqueWithoutCreatedByInput {
};
exports.LoanUpdateWithWhereUniqueWithoutCreatedByInput = LoanUpdateWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateWithoutCreatedByInput_1.LoanUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateWithoutCreatedByInput_1.LoanUpdateWithoutCreatedByInput)
], LoanUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
exports.LoanUpdateWithWhereUniqueWithoutCreatedByInput = LoanUpdateWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateWithWhereUniqueWithoutCreatedByInput", {})
], LoanUpdateWithWhereUniqueWithoutCreatedByInput);
