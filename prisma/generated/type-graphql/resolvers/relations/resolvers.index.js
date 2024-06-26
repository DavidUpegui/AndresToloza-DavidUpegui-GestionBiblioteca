"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = exports.SessionRelationsResolver = exports.LoanRelationsResolver = exports.BookRelationsResolver = exports.AccountRelationsResolver = void 0;
var AccountRelationsResolver_1 = require("./Account/AccountRelationsResolver");
Object.defineProperty(exports, "AccountRelationsResolver", { enumerable: true, get: function () { return AccountRelationsResolver_1.AccountRelationsResolver; } });
var BookRelationsResolver_1 = require("./Book/BookRelationsResolver");
Object.defineProperty(exports, "BookRelationsResolver", { enumerable: true, get: function () { return BookRelationsResolver_1.BookRelationsResolver; } });
var LoanRelationsResolver_1 = require("./Loan/LoanRelationsResolver");
Object.defineProperty(exports, "LoanRelationsResolver", { enumerable: true, get: function () { return LoanRelationsResolver_1.LoanRelationsResolver; } });
var SessionRelationsResolver_1 = require("./Session/SessionRelationsResolver");
Object.defineProperty(exports, "SessionRelationsResolver", { enumerable: true, get: function () { return SessionRelationsResolver_1.SessionRelationsResolver; } });
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", { enumerable: true, get: function () { return UserRelationsResolver_1.UserRelationsResolver; } });
