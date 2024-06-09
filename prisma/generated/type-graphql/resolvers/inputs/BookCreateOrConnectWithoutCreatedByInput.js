"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateOrConnectWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutCreatedByInput_1 = require("../inputs/BookCreateWithoutCreatedByInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateOrConnectWithoutCreatedByInput = class BookCreateOrConnectWithoutCreatedByInput {
};
exports.BookCreateOrConnectWithoutCreatedByInput = BookCreateOrConnectWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateOrConnectWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutCreatedByInput_1.BookCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutCreatedByInput_1.BookCreateWithoutCreatedByInput)
], BookCreateOrConnectWithoutCreatedByInput.prototype, "create", void 0);
exports.BookCreateOrConnectWithoutCreatedByInput = BookCreateOrConnectWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateOrConnectWithoutCreatedByInput", {})
], BookCreateOrConnectWithoutCreatedByInput);
