"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateManyWithoutCreatedByNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateManyCreatedByInputEnvelope_1 = require("../inputs/BookCreateManyCreatedByInputEnvelope");
const BookCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/BookCreateOrConnectWithoutCreatedByInput");
const BookCreateWithoutCreatedByInput_1 = require("../inputs/BookCreateWithoutCreatedByInput");
const BookScalarWhereInput_1 = require("../inputs/BookScalarWhereInput");
const BookUpdateManyWithWhereWithoutCreatedByInput_1 = require("../inputs/BookUpdateManyWithWhereWithoutCreatedByInput");
const BookUpdateWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/BookUpdateWithWhereUniqueWithoutCreatedByInput");
const BookUpsertWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/BookUpsertWithWhereUniqueWithoutCreatedByInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookUpdateManyWithoutCreatedByNestedInput = class BookUpdateManyWithoutCreatedByNestedInput {
};
exports.BookUpdateManyWithoutCreatedByNestedInput = BookUpdateManyWithoutCreatedByNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookCreateWithoutCreatedByInput_1.BookCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutCreatedByInput_1.BookCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutCreatedByInput_1.BookUpsertWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateManyCreatedByInputEnvelope_1.BookCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateManyCreatedByInputEnvelope_1.BookCreateManyCreatedByInputEnvelope)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereUniqueInput_1.BookWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereUniqueInput_1.BookWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereUniqueInput_1.BookWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereUniqueInput_1.BookWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutCreatedByInput_1.BookUpdateWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutCreatedByInput_1.BookUpdateManyWithWhereWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookScalarWhereInput_1.BookScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookUpdateManyWithoutCreatedByNestedInput.prototype, "deleteMany", void 0);
exports.BookUpdateManyWithoutCreatedByNestedInput = BookUpdateManyWithoutCreatedByNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateManyWithoutCreatedByNestedInput", {})
], BookUpdateManyWithoutCreatedByNestedInput);
