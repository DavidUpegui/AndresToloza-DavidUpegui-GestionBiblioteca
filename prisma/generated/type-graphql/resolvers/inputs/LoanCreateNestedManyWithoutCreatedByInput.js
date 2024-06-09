"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateNestedManyWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyCreatedByInputEnvelope_1 = require("../inputs/LoanCreateManyCreatedByInputEnvelope");
const LoanCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/LoanCreateOrConnectWithoutCreatedByInput");
const LoanCreateWithoutCreatedByInput_1 = require("../inputs/LoanCreateWithoutCreatedByInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanCreateNestedManyWithoutCreatedByInput = class LoanCreateNestedManyWithoutCreatedByInput {
};
exports.LoanCreateNestedManyWithoutCreatedByInput = LoanCreateNestedManyWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateWithoutCreatedByInput_1.LoanCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutCreatedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateOrConnectWithoutCreatedByInput_1.LoanCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateManyCreatedByInputEnvelope_1.LoanCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateManyCreatedByInputEnvelope_1.LoanCreateManyCreatedByInputEnvelope)
], LoanCreateNestedManyWithoutCreatedByInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateNestedManyWithoutCreatedByInput.prototype, "connect", void 0);
exports.LoanCreateNestedManyWithoutCreatedByInput = LoanCreateNestedManyWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateNestedManyWithoutCreatedByInput", {})
], LoanCreateNestedManyWithoutCreatedByInput);
