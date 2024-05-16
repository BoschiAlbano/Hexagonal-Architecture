import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { RepoQuerieStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { AuthenticatorProxiAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";
import { User } from "./schemas";

const compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerieStub = new RepoQuerieStub();

    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerieStub
    );

    const authenticatorProxiAdapter = new AuthenticatorProxiAdapter(
        dashboardApiMock
    );

    return {
        authenticatorProxiAdapter,
    };
};

export const { authenticatorProxiAdapter } = compositionMock();

const registerMock: User = {
    name: "Leandro",
    email: "Leandro@gmail.com",
    password: "123456",
};

authenticatorProxiAdapter.login("Leandro@gmail.com", "123");
authenticatorProxiAdapter.register(registerMock);
