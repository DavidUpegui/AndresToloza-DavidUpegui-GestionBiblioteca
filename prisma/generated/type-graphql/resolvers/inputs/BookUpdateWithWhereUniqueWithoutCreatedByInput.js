"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateWithoutCreatedByInput_1 = require("../inputs/BookUpdateWithoutCreatedByInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookUpdateWithWhereUniqueWithoutCreatedByInput = class BookUpdateWithWhereUniqueWithoutCreatedByInput {
};
exports.BookUpdateWithWhereUniqueWithoutCreatedByInput = BookUpdateWithWhereUniqueWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutCreatedByInput_1.BookUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutCreatedByInput_1.BookUpdateWithoutCreatedByInput)
], BookUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
exports.BookUpdateWithWhereUniqueWithoutCreatedByInput = BookUpdateWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutCreatedByInput", {})
], BookUpdateWithWhereUniqueWithoutCreatedByInput);
