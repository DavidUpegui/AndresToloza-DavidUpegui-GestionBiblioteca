"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Book_1 = require("../../../models/Book");
const Loan_1 = require("../../../models/Loan");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let LoanRelationsResolver = class LoanRelationsResolver {
    async user(loan, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findUniqueOrThrow({
            where: {
                id: loan.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async book(loan, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findUniqueOrThrow({
            where: {
                id: loan.id,
            },
        }).book({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createdBy(loan, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).loan.findUniqueOrThrow({
            where: {
                id: loan.id,
            },
        }).createdBy({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.LoanRelationsResolver = LoanRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Loan_1.Loan, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Loan_1.Loan, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanRelationsResolver.prototype, "book", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Loan_1.Loan, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoanRelationsResolver.prototype, "createdBy", null);
exports.LoanRelationsResolver = LoanRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Loan_1.Loan)
], LoanRelationsResolver);
