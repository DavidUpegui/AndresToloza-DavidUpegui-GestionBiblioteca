"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Loan: crudResolvers.LoanCrudResolver,
    Book: crudResolvers.BookCrudResolver,
    User: crudResolvers.UserCrudResolver,
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
    Loan: {
        aggregateLoan: actionResolvers.AggregateLoanResolver,
        createManyLoan: actionResolvers.CreateManyLoanResolver,
        createOneLoan: actionResolvers.CreateOneLoanResolver,
        deleteManyLoan: actionResolvers.DeleteManyLoanResolver,
        deleteOneLoan: actionResolvers.DeleteOneLoanResolver,
        findFirstLoan: actionResolvers.FindFirstLoanResolver,
        findFirstLoanOrThrow: actionResolvers.FindFirstLoanOrThrowResolver,
        loans: actionResolvers.FindManyLoanResolver,
        loan: actionResolvers.FindUniqueLoanResolver,
        getLoan: actionResolvers.FindUniqueLoanOrThrowResolver,
        groupByLoan: actionResolvers.GroupByLoanResolver,
        updateManyLoan: actionResolvers.UpdateManyLoanResolver,
        updateOneLoan: actionResolvers.UpdateOneLoanResolver,
        upsertOneLoan: actionResolvers.UpsertOneLoanResolver
    },
    Book: {
        aggregateBook: actionResolvers.AggregateBookResolver,
        createManyBook: actionResolvers.CreateManyBookResolver,
        createOneBook: actionResolvers.CreateOneBookResolver,
        deleteManyBook: actionResolvers.DeleteManyBookResolver,
        deleteOneBook: actionResolvers.DeleteOneBookResolver,
        findFirstBook: actionResolvers.FindFirstBookResolver,
        findFirstBookOrThrow: actionResolvers.FindFirstBookOrThrowResolver,
        books: actionResolvers.FindManyBookResolver,
        book: actionResolvers.FindUniqueBookResolver,
        getBook: actionResolvers.FindUniqueBookOrThrowResolver,
        groupByBook: actionResolvers.GroupByBookResolver,
        updateManyBook: actionResolvers.UpdateManyBookResolver,
        updateOneBook: actionResolvers.UpdateOneBookResolver,
        upsertOneBook: actionResolvers.UpsertOneBookResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
    }
};
const crudResolversInfo = {
    Loan: ["aggregateLoan", "createManyLoan", "createOneLoan", "deleteManyLoan", "deleteOneLoan", "findFirstLoan", "findFirstLoanOrThrow", "loans", "loan", "getLoan", "groupByLoan", "updateManyLoan", "updateOneLoan", "upsertOneLoan"],
    Book: ["aggregateBook", "createManyBook", "createOneBook", "deleteManyBook", "deleteOneBook", "findFirstBook", "findFirstBookOrThrow", "books", "book", "getBook", "groupByBook", "updateManyBook", "updateOneBook", "upsertOneBook"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"]
};
const argsInfo = {
    AggregateLoanArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyLoanArgs: ["data", "skipDuplicates"],
    CreateOneLoanArgs: ["data"],
    DeleteManyLoanArgs: ["where"],
    DeleteOneLoanArgs: ["where"],
    FindFirstLoanArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstLoanOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyLoanArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueLoanArgs: ["where"],
    FindUniqueLoanOrThrowArgs: ["where"],
    GroupByLoanArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyLoanArgs: ["data", "where"],
    UpdateOneLoanArgs: ["data", "where"],
    UpsertOneLoanArgs: ["where", "create", "update"],
    AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBookArgs: ["data", "skipDuplicates"],
    CreateOneBookArgs: ["data"],
    DeleteManyBookArgs: ["where"],
    DeleteOneBookArgs: ["where"],
    FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBookOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBookArgs: ["where"],
    FindUniqueBookOrThrowArgs: ["where"],
    GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBookArgs: ["data", "where"],
    UpdateOneBookArgs: ["data", "where"],
    UpsertOneBookArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Loan: relationResolvers.LoanRelationsResolver,
    Book: relationResolvers.BookRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver
};
const relationResolversInfo = {
    Loan: ["user", "book", "createdBy"],
    Book: ["loans", "createdBy"],
    User: ["accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    Account: ["user"],
    Session: ["user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Loan: ["id", "userId", "bookId", "status"],
    Book: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    User: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    Account: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    Session: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationToken: ["identifier", "token", "expires"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateLoan: ["_count", "_min", "_max"],
    LoanGroupBy: ["id", "userId", "bookId", "status", "_count", "_min", "_max"],
    AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
    BookGroupBy: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    LoanCountAggregate: ["id", "userId", "bookId", "status", "_all"],
    LoanMinAggregate: ["id", "userId", "bookId", "status"],
    LoanMaxAggregate: ["id", "userId", "bookId", "status"],
    BookCount: ["loans"],
    BookCountAggregate: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "_all"],
    BookAvgAggregate: ["quantityAvaiable"],
    BookSumAggregate: ["quantityAvaiable"],
    BookMinAggregate: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    BookMaxAggregate: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    UserCount: ["accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    AccountCountAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCountAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_all"],
    SessionMinAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    CreateManyLoanAndReturnOutputType: ["id", "userId", "bookId", "status", "user", "book", "createdBy"],
    CreateManyBookAndReturnOutputType: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "createdBy"],
    CreateManyUserAndReturnOutputType: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    CreateManyAccountAndReturnOutputType: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    CreateManySessionAndReturnOutputType: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    CreateManyVerificationTokenAndReturnOutputType: ["identifier", "token", "expires"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    LoanWhereInput: ["AND", "OR", "NOT", "id", "userId", "bookId", "status", "user", "book", "createdBy"],
    LoanOrderByWithRelationInput: ["id", "userId", "bookId", "status", "user", "book", "createdBy"],
    LoanWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "bookId", "status", "user", "book", "createdBy"],
    LoanOrderByWithAggregationInput: ["id", "userId", "bookId", "status", "_count", "_max", "_min"],
    LoanScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "bookId", "status"],
    BookWhereInput: ["AND", "OR", "NOT", "id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "loans", "createdBy"],
    BookOrderByWithRelationInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "loans", "createdBy"],
    BookWhereUniqueInput: ["id", "AND", "OR", "NOT", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "loans", "createdBy"],
    BookOrderByWithAggregationInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    AccountWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithRelationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountWhereUniqueInput: ["provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithAggregationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithRelationInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionWhereUniqueInput: ["sessionToken", "AND", "OR", "NOT", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithAggregationInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["identifier_token", "AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    LoanCreateInput: ["id", "status", "user", "book", "createdBy"],
    LoanUpdateInput: ["id", "status", "user", "book", "createdBy"],
    LoanCreateManyInput: ["id", "userId", "bookId", "status"],
    LoanUpdateManyMutationInput: ["id", "status"],
    BookCreateInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "loans", "createdBy"],
    BookUpdateInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "loans", "createdBy"],
    BookCreateManyInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    BookUpdateManyMutationInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans", "createdBooks"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    AccountCreateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountCreateManyInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCreateInput: ["sessionToken", "expires", "createdAt", "updatedAt", "user"],
    SessionUpdateInput: ["sessionToken", "expires", "createdAt", "updatedAt", "user"],
    SessionCreateManyInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumLoanStatusFilter: ["equals", "in", "notIn", "not"],
    UserRelationFilter: ["is", "isNot"],
    BookRelationFilter: ["is", "isNot"],
    LoanCountOrderByAggregateInput: ["id", "userId", "bookId", "status"],
    LoanMaxOrderByAggregateInput: ["id", "userId", "bookId", "status"],
    LoanMinOrderByAggregateInput: ["id", "userId", "bookId", "status"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumLoanStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    LoanListRelationFilter: ["every", "some", "none"],
    LoanOrderByRelationAggregateInput: ["_count"],
    BookCountOrderByAggregateInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    BookAvgOrderByAggregateInput: ["quantityAvaiable"],
    BookMaxOrderByAggregateInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    BookMinOrderByAggregateInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    BookSumOrderByAggregateInput: ["quantityAvaiable"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumEnum_RoleNameNullableFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    BookListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    BookOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumEnum_RoleNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMaxOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMinOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    UserCreateNestedOneWithoutLoansInput: ["create", "connectOrCreate", "connect"],
    BookCreateNestedOneWithoutLoansInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutCreatedLoansInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumLoanStatusFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutLoansNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BookUpdateOneRequiredWithoutLoansNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutCreatedLoansNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    LoanCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedOneWithoutCreatedBooksInput: ["create", "connectOrCreate", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    LoanUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserUpdateOneRequiredWithoutCreatedBooksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    LoanCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    LoanCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
    BookCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    NullableEnumEnum_RoleNameFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    LoanUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    LoanUpdateManyWithoutCreatedByNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BookUpdateManyWithoutCreatedByNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumLoanStatusFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumLoanStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_RoleNameNullableFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumEnum_RoleNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserCreateWithoutLoansInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "createdLoans", "createdBooks"],
    UserCreateOrConnectWithoutLoansInput: ["where", "create"],
    BookCreateWithoutLoansInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "createdBy"],
    BookCreateOrConnectWithoutLoansInput: ["where", "create"],
    UserCreateWithoutCreatedLoansInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdBooks"],
    UserCreateOrConnectWithoutCreatedLoansInput: ["where", "create"],
    UserUpsertWithoutLoansInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutLoansInput: ["where", "data"],
    UserUpdateWithoutLoansInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "createdLoans", "createdBooks"],
    BookUpsertWithoutLoansInput: ["update", "create", "where"],
    BookUpdateToOneWithWhereWithoutLoansInput: ["where", "data"],
    BookUpdateWithoutLoansInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "createdBy"],
    UserUpsertWithoutCreatedLoansInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutCreatedLoansInput: ["where", "data"],
    UserUpdateWithoutCreatedLoansInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdBooks"],
    LoanCreateWithoutBookInput: ["id", "status", "user", "createdBy"],
    LoanCreateOrConnectWithoutBookInput: ["where", "create"],
    LoanCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutCreatedBooksInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans"],
    UserCreateOrConnectWithoutCreatedBooksInput: ["where", "create"],
    LoanUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
    LoanUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
    LoanUpdateManyWithWhereWithoutBookInput: ["where", "data"],
    LoanScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "bookId", "status"],
    UserUpsertWithoutCreatedBooksInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutCreatedBooksInput: ["where", "data"],
    UserUpdateWithoutCreatedBooksInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "sessions", "loans", "createdLoans"],
    AccountCreateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    LoanCreateWithoutUserInput: ["id", "status", "book", "createdBy"],
    LoanCreateOrConnectWithoutUserInput: ["where", "create"],
    LoanCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    LoanCreateWithoutCreatedByInput: ["id", "status", "user", "book"],
    LoanCreateOrConnectWithoutCreatedByInput: ["where", "create"],
    LoanCreateManyCreatedByInputEnvelope: ["data", "skipDuplicates"],
    BookCreateWithoutCreatedByInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "loans"],
    BookCreateOrConnectWithoutCreatedByInput: ["where", "create"],
    BookCreateManyCreatedByInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    LoanUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    LoanUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    LoanUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    LoanUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
    LoanUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
    LoanUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
    BookUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
    BookUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
    BookUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
    BookScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "author", "description", "category", "image", "quantityAvaiable", "userId"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "sessions", "loans", "createdLoans", "createdBooks"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "sessions", "loans", "createdLoans", "createdBooks"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "loans", "createdLoans", "createdBooks"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "createdAt", "updatedAt", "accounts", "loans", "createdLoans", "createdBooks"],
    LoanCreateManyBookInput: ["id", "userId", "status"],
    LoanUpdateWithoutBookInput: ["id", "status", "user", "createdBy"],
    AccountCreateManyUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCreateManyUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    LoanCreateManyUserInput: ["id", "bookId", "status"],
    LoanCreateManyCreatedByInput: ["id", "bookId", "status"],
    BookCreateManyCreatedByInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable"],
    AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionUpdateWithoutUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    LoanUpdateWithoutUserInput: ["id", "status", "book", "createdBy"],
    LoanUpdateWithoutCreatedByInput: ["id", "status", "user", "book"],
    BookUpdateWithoutCreatedByInput: ["id", "title", "author", "description", "category", "image", "quantityAvaiable", "loans"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
