"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLoanAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Book_1 = require("../../models/Book");
const User_1 = require("../../models/User");
const LoanStatus_1 = require("../../enums/LoanStatus");
let CreateManyLoanAndReturnOutputType = class CreateManyLoanAndReturnOutputType {
};
exports.CreateManyLoanAndReturnOutputType = CreateManyLoanAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLoanAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLoanAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLoanAndReturnOutputType.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLoanAndReturnOutputType.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyLoanAndReturnOutputType.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Book_1.Book !== "undefined" && Book_1.Book) === "function" ? _b : Object)
], CreateManyLoanAndReturnOutputType.prototype, "book", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_c = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _c : Object)
], CreateManyLoanAndReturnOutputType.prototype, "createdBy", void 0);
exports.CreateManyLoanAndReturnOutputType = CreateManyLoanAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyLoanAndReturnOutputType", {})
], CreateManyLoanAndReturnOutputType);
