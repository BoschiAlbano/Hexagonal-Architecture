import { ForControlAuthenticating } from "../ports/drivens/for-control-authenticating";
import { ForAuthenticating } from "../ports/drivers/for-authenticating";
import { AuthenticatedUser } from "./schemas";
import { ForRepoQuerying } from "../ports/drivens/for-repo-querying";
import { User } from "./schemas";

export class DashboardApi implements ForAuthenticating {
    constructor(
        private readonly controlAuthenticator: ForControlAuthenticating,
        private readonly repoQuerie: ForRepoQuerying
    ) {}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(
            email,
            password
        );

        const permissions = await this.controlAuthenticator.getPermissions(
            email,
            password
        );

        const user = await this.repoQuerie.getUser(email);

        const Result = {
            ...user,
            ...authDetails,
            permissions,
        };

        console.log(["LOGIN", Result]);
        return Result;
    }

    async register(user: User): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerie.createUser(user);

        const authDetails = await this.controlAuthenticator.getAuthDetails(
            user.email,
            user.password
        );

        const permissions = await this.controlAuthenticator.getPermissions(
            user.email,
            user.password
        );

        const Result = {
            ...newUser,
            ...authDetails,
            permissions,
        };

        console.log(["REGISTER", Result]);

        return Result;
    }
}
