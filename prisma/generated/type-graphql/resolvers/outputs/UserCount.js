"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountAccountsArgs_1 = require("./args/UserCountAccountsArgs");
const UserCountCreatedBooksArgs_1 = require("./args/UserCountCreatedBooksArgs");
const UserCountCreatedLoansArgs_1 = require("./args/UserCountCreatedLoansArgs");
const UserCountLoansArgs_1 = require("./args/UserCountLoansArgs");
const UserCountSessionsArgs_1 = require("./args/UserCountSessionsArgs");
let UserCount = class UserCount {
    getAccounts(root, args) {
        return root.accounts;
    }
    getSessions(root, args) {
        return root.sessions;
    }
    getLoans(root, args) {
        return root.loans;
    }
    getCreatedLoans(root, args) {
        return root.createdLoans;
    }
    getCreatedBooks(root, args) {
        return root.createdBooks;
    }
};
exports.UserCount = UserCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "accounts",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountAccountsArgs_1.UserCountAccountsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "sessions",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountSessionsArgs_1.UserCountSessionsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getSessions", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "loans",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountLoansArgs_1.UserCountLoansArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getLoans", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "createdLoans",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountCreatedLoansArgs_1.UserCountCreatedLoansArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getCreatedLoans", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "createdBooks",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountCreatedBooksArgs_1.UserCountCreatedBooksArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getCreatedBooks", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
