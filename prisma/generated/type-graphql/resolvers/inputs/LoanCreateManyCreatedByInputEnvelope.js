"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateManyCreatedByInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyCreatedByInput_1 = require("../inputs/LoanCreateManyCreatedByInput");
let LoanCreateManyCreatedByInputEnvelope = class LoanCreateManyCreatedByInputEnvelope {
};
exports.LoanCreateManyCreatedByInputEnvelope = LoanCreateManyCreatedByInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateManyCreatedByInput_1.LoanCreateManyCreatedByInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LoanCreateManyCreatedByInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LoanCreateManyCreatedByInputEnvelope.prototype, "skipDuplicates", void 0);
exports.LoanCreateManyCreatedByInputEnvelope = LoanCreateManyCreatedByInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanCreateManyCreatedByInputEnvelope", {})
], LoanCreateManyCreatedByInputEnvelope);
