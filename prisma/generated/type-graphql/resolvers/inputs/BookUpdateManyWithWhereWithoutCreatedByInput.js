"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateManyWithWhereWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookScalarWhereInput_1 = require("../inputs/BookScalarWhereInput");
const BookUpdateManyMutationInput_1 = require("../inputs/BookUpdateManyMutationInput");
let BookUpdateManyWithWhereWithoutCreatedByInput = class BookUpdateManyWithWhereWithoutCreatedByInput {
};
exports.BookUpdateManyWithWhereWithoutCreatedByInput = BookUpdateManyWithWhereWithoutCreatedByInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookScalarWhereInput_1.BookScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookScalarWhereInput_1.BookScalarWhereInput)
], BookUpdateManyWithWhereWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateManyMutationInput_1.BookUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateManyMutationInput_1.BookUpdateManyMutationInput)
], BookUpdateManyWithWhereWithoutCreatedByInput.prototype, "data", void 0);
exports.BookUpdateManyWithWhereWithoutCreatedByInput = BookUpdateManyWithWhereWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateManyWithWhereWithoutCreatedByInput", {})
], BookUpdateManyWithWhereWithoutCreatedByInput);
