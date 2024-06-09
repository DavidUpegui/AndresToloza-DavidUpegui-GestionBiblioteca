"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateManyCreatedByInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateManyCreatedByInput_1 = require("../inputs/BookCreateManyCreatedByInput");
let BookCreateManyCreatedByInputEnvelope = class BookCreateManyCreatedByInputEnvelope {
};
exports.BookCreateManyCreatedByInputEnvelope = BookCreateManyCreatedByInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookCreateManyCreatedByInput_1.BookCreateManyCreatedByInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookCreateManyCreatedByInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookCreateManyCreatedByInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BookCreateManyCreatedByInputEnvelope = BookCreateManyCreatedByInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateManyCreatedByInputEnvelope", {})
], BookCreateManyCreatedByInputEnvelope);
