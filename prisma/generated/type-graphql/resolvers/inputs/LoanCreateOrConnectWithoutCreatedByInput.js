"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateOrConnectWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateWithoutCreatedByInput_1 = require("../inputs/LoanCreateWithoutCreatedByInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanCreateOrConnectWithoutCreatedByInput = class LoanCreateOrConnectWithoutCreatedByInput {
};
exports.LoanCreateOrConnectWithoutCreatedByInput = LoanCreateOrConnectWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereUniqueInput_1.LoanWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanWhereUniqueInput_1.LoanWhereUniqueInput)
], LoanCreateOrConnectWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateWithoutCreatedByInput_1.LoanCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LoanCreateWithoutCreatedByInput_1.LoanCreateWithoutCreatedByInput)
], LoanCreateOrConnectWithoutCreatedByInput.prototype, "create", void 0);
exports.LoanCreateOrConnectWithoutCreatedByInput = LoanCreateOrConnectWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateOrConnectWithoutCreatedByInput", {})
], LoanCreateOrConnectWithoutCreatedByInput);
