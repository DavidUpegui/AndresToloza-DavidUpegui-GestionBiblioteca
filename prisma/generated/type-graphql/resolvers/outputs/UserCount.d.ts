import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountCreatedBooksArgs } from "./args/UserCountCreatedBooksArgs";
import { UserCountCreatedLoansArgs } from "./args/UserCountCreatedLoansArgs";
import { UserCountLoansArgs } from "./args/UserCountLoansArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
export declare class UserCount {
    accounts: number;
    sessions: number;
    loans: number;
    createdLoans: number;
    createdBooks: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
    getLoans(root: UserCount, args: UserCountLoansArgs): number;
    getCreatedLoans(root: UserCount, args: UserCountCreatedLoansArgs): number;
    getCreatedBooks(root: UserCount, args: UserCountCreatedBooksArgs): number;
}
