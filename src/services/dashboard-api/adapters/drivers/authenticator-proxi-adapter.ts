import { DashboardApi } from "../../app/dashboard-api";
import { ForAuthenticating } from "../../ports/drivers";
import { User } from "../../app/schemas";

import { AuthenticatedUser } from "../../app/schemas";

export class AuthenticatorProxiAdapter implements ForAuthenticating {
    constructor(private readonly dashboardApi: DashboardApi) {}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email, password);
    }
    register(user: User): Promise<AuthenticatedUser> {
        return this.dashboardApi.register(user);
    }
}
