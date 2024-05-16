import { describe, expect, it } from "vitest";
import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { RepoQuerieStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { DashboardApi } from "./dashboard-api";
import { AuthenticatedUser, User } from "./schemas";

describe("DashboardApi", () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerieStub = new RepoQuerieStub();

    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerieStub
    );

    it.concurrent("should login", async () => {
        // GIVEN - DEBERIA
        const mockParams = {
            email: "Boschi.Albano.Jose@gmail.com",
            password: "123456",
        };

        const expectedResult: AuthenticatedUser = {
            id: "1",
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            token: "Token",
            refreshToken: "RefreshToken",
            permissions: { admin: true, user: true },
        };

        // WHERE - DONDE
        const result = await dashboardApiMock.login(
            mockParams.email,
            mockParams.password
        );

        //THEN - LUEGO
        expect(result).toEqual(expectedResult);
    });

    it.concurrent("should register", async () => {
        // GIVEN - DEBERIA
        const user: User = {
            email: "Boschi.Albano.Jose@gmial.com",
            name: "Albano",
            password: "123456",
        };

        const expectedResult: AuthenticatedUser = {
            id: "1",
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            token: "Token",
            refreshToken: "RefreshToken",
            permissions: { admin: true, user: true },
        };

        // WHERE - DONDE
        const result = await dashboardApiMock.register(user);

        // THEN
        expect(result).toEqual(expectedResult);
    });
});
