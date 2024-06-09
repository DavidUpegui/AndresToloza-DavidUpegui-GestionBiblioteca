"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LoanUpdateManyWithoutBookNestedInput_1 = require("../inputs/LoanUpdateManyWithoutBookNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BookUpdateWithoutCreatedByInput = class BookUpdateWithoutCreatedByInput {
};
exports.BookUpdateWithoutCreatedByInput = BookUpdateWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], BookUpdateWithoutCreatedByInput.prototype, "quantityAvaiable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanUpdateManyWithoutBookNestedInput_1.LoanUpdateManyWithoutBookNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanUpdateManyWithoutBookNestedInput_1.LoanUpdateManyWithoutBookNestedInput)
], BookUpdateWithoutCreatedByInput.prototype, "loans", void 0);
exports.BookUpdateWithoutCreatedByInput = BookUpdateWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateWithoutCreatedByInput", {})
], BookUpdateWithoutCreatedByInput);
