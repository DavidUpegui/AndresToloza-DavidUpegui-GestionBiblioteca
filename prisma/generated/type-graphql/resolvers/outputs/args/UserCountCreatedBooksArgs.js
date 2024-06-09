"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountCreatedBooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereInput_1 = require("../../inputs/BookWhereInput");
let UserCountCreatedBooksArgs = class UserCountCreatedBooksArgs {
};
exports.UserCountCreatedBooksArgs = UserCountCreatedBooksArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], UserCountCreatedBooksArgs.prototype, "where", void 0);
exports.UserCountCreatedBooksArgs = UserCountCreatedBooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountCreatedBooksArgs);
