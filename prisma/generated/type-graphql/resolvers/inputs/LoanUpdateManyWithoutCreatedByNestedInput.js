"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateManyWithoutCreatedByNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyCreatedByInputEnvelope_1 = require("../inputs/LoanCreateManyCreatedByInputEnvelope");
const LoanCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/LoanCreateOrConnectWithoutCreatedByInput");
const LoanCreateWithoutCreatedByInput_1 = require("../inputs/LoanCreateWithoutCreatedByInput");
const LoanScalarWhereInput_1 = require("../inputs/LoanScalarWhereInput");
const LoanUpdateManyWithWhereWithoutCreatedByInput_1 = require("../inputs/LoanUpdateManyWithWhereWithoutCreatedByInput");
const LoanUpdateWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/LoanUpdateWithWhereUniqueWithoutCreatedByInput");
const LoanUpsertWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/LoanUpsertWithWhereUniqueWithoutCreatedByInput");
const LoanWhereUniqueInput_1 = require("../inputs/LoanWhereUniqueInput");
let LoanUpdateManyWithoutCreatedByNestedInput = class LoanUpdateManyWithoutCreatedByNestedInput {
};
exports.LoanUpdateManyWithoutCreatedByNestedInput = LoanUpdateManyWithoutCreatedByNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateWithoutCreatedByInput_1.LoanCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateOrConnectWithoutCreatedByInput_1.LoanCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpsertWithWhereUniqueWithoutCreatedByInput_1.LoanUpsertWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanCreateManyCreatedByInputEnvelope_1.LoanCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanCreateManyCreatedByInputEnvelope_1.LoanCreateManyCreatedByInputEnvelope)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanWhereUniqueInput_1.LoanWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpdateWithWhereUniqueWithoutCreatedByInput_1.LoanUpdateWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanUpdateManyWithWhereWithoutCreatedByInput_1.LoanUpdateManyWithWhereWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanScalarWhereInput_1.LoanScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LoanUpdateManyWithoutCreatedByNestedInput.prototype, "deleteMany", void 0);
exports.LoanUpdateManyWithoutCreatedByNestedInput = LoanUpdateManyWithoutCreatedByNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanUpdateManyWithoutCreatedByNestedInput", {})
], LoanUpdateManyWithoutCreatedByNestedInput);
