import { initTRPC } from "@trpc/server";
import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
// import { RepoQuerieStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { RepoQuerieLocalAdapter } from "../adapters/drivens";
import {
    // AuthenticatorProxiAdapter,
    authTRPCAdapter,
} from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";
// import { User } from "./schemas";

// const compositionMock = () => {
//     const controlAuthenticatorStub = new ControlAuthenticatorStub();
//     const repoQuerieStub = new RepoQuerieStub();

//     const dashboardApiMock = new DashboardApi(
//         controlAuthenticatorStub,
//         repoQuerieStub
//     );

//     const authenticatorProxiAdapter = new AuthenticatorProxiAdapter(
//         dashboardApiMock
//     );

//     return {
//         authenticatorProxiAdapter,
//     };
// };

// export const { authenticatorProxiAdapter } = compositionMock();

// const registerMock: User = {
//     name: "Leandro",
//     email: "Leandro@gmail.com",
//     password: "123456",
// };

// authenticatorProxiAdapter.login("Leandro@gmail.com", "123");
// authenticatorProxiAdapter.register(registerMock);

export const localTRPCCompose = () => {
    // DRIVENS
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerieLocal = new RepoQuerieLocalAdapter();

    // APP
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerieLocal
    );

    // TRPC INTANCE
    const t = initTRPC.create();

    // TRPC DRIVER
    const authTRPCAdapterRouter = authTRPCAdapter(dashboardApiMock, t);

    const appRouter = t.mergeRouters(authTRPCAdapterRouter);

    return { appRouter };
};

export const { appRouter } = localTRPCCompose();
