"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Book_1 = require("../../../models/Book");
const Loan_1 = require("../../../models/Loan");
const User_1 = require("../../../models/User");
const BookLoansArgs_1 = require("./args/BookLoansArgs");
const helpers_1 = require("../../../helpers");
let BookRelationsResolver = class BookRelationsResolver {
    async loans(book, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findUniqueOrThrow({
            where: {
                id: book.id,
            },
        }).loans({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createdBy(book, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findUniqueOrThrow({
            where: {
                id: book.id,
            },
        }).createdBy({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BookRelationsResolver = BookRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Loan_1.Loan], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Book_1.Book, Object, Object, BookLoansArgs_1.BookLoansArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookRelationsResolver.prototype, "loans", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Book_1.Book, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookRelationsResolver.prototype, "createdBy", null);
exports.BookRelationsResolver = BookRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], BookRelationsResolver);
