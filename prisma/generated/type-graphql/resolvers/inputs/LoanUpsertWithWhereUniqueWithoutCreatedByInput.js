"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpsertWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateWithoutCreatedByInput_1 = require("../inputs/LoanCreateWithoutCreatedByInput");
const LoanUpdateWithoutCreatedByInput_1 = require("../inputs/LoanUpdateWithoutCreatedByInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpsertWithWhereUniqueWithoutCreatedByInput = class LoanUpsertWithWhereUniqueWithoutCreatedByInput {
};
exports.LoanUpsertWithWhereUniqueWithoutCreatedByInput = LoanUpsertWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateWithoutCreatedByInput_1.LoanUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanUpdateWithoutCreatedByInput_1.LoanUpdateWithoutCreatedByInput)
], LoanUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateWithoutCreatedByInput_1.LoanCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateWithoutCreatedByInput_1.LoanCreateWithoutCreatedByInput)
], LoanUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "create", void 0);
exports.LoanUpsertWithWhereUniqueWithoutCreatedByInput = LoanUpsertWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpsertWithWhereUniqueWithoutCreatedByInput", {})
], LoanUpsertWithWhereUniqueWithoutCreatedByInput);
