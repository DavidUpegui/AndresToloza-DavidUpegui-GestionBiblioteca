"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountCreatedLoansArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanWhereInput_1 = require("../../inputs/LoanWhereInput");
let UserCountCreatedLoansArgs = class UserCountCreatedLoansArgs {
};
exports.UserCountCreatedLoansArgs = UserCountCreatedLoansArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], UserCountCreatedLoansArgs.prototype, "where", void 0);
exports.UserCountCreatedLoansArgs = UserCountCreatedLoansArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountCreatedLoansArgs);
