"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateNestedManyWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateManyCreatedByInputEnvelope_1 = require("../inputs/BookCreateManyCreatedByInputEnvelope");
const BookCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/BookCreateOrConnectWithoutCreatedByInput");
const BookCreateWithoutCreatedByInput_1 = require("../inputs/BookCreateWithoutCreatedByInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateNestedManyWithoutCreatedByInput = class BookCreateNestedManyWithoutCreatedByInput {
};
exports.BookCreateNestedManyWithoutCreatedByInput = BookCreateNestedManyWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookCreateWithoutCreatedByInput_1.BookCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookCreateNestedManyWithoutCreatedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutCreatedByInput_1.BookCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookCreateNestedManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateManyCreatedByInputEnvelope_1.BookCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateManyCreatedByInputEnvelope_1.BookCreateManyCreatedByInputEnvelope)
], BookCreateNestedManyWithoutCreatedByInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereUniqueInput_1.BookWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookCreateNestedManyWithoutCreatedByInput.prototype, "connect", void 0);
exports.BookCreateNestedManyWithoutCreatedByInput = BookCreateNestedManyWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateNestedManyWithoutCreatedByInput", {})
], BookCreateNestedManyWithoutCreatedByInput);
