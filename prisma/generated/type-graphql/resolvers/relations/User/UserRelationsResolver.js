"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Loan_1 = require("../../../models/Loan");
const Role_1 = require("../../../models/Role");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const UserAccountsArgs_1 = require("./args/UserAccountsArgs");
const UserLoansArgs_1 = require("./args/UserLoansArgs");
const UserSessionsArgs_1 = require("./args/UserSessionsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async role(user, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).role({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async accounts(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).accounts({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sessions(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).sessions({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async loans(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).loans({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UserRelationsResolver = UserRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Role_1.Role, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "role", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Account_1.Account], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserAccountsArgs_1.UserAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "accounts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Session_1.Session], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserSessionsArgs_1.UserSessionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "sessions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Loan_1.Loan], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserLoansArgs_1.UserLoansArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "loans", null);
exports.UserRelationsResolver = UserRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);