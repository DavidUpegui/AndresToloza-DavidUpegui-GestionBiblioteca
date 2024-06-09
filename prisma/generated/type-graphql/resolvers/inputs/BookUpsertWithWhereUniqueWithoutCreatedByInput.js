"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpsertWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutCreatedByInput_1 = require("../inputs/BookCreateWithoutCreatedByInput");
const BookUpdateWithoutCreatedByInput_1 = require("../inputs/BookUpdateWithoutCreatedByInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookUpsertWithWhereUniqueWithoutCreatedByInput = class BookUpsertWithWhereUniqueWithoutCreatedByInput {
};
exports.BookUpsertWithWhereUniqueWithoutCreatedByInput = BookUpsertWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutCreatedByInput_1.BookUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutCreatedByInput_1.BookUpdateWithoutCreatedByInput)
], BookUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutCreatedByInput_1.BookCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutCreatedByInput_1.BookCreateWithoutCreatedByInput)
], BookUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "create", void 0);
exports.BookUpsertWithWhereUniqueWithoutCreatedByInput = BookUpsertWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutCreatedByInput", {})
], BookUpsertWithWhereUniqueWithoutCreatedByInput);
