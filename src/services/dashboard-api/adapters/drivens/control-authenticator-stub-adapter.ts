import { ForControlAuthenticating } from "../../ports/drivens";
import { Permissions, AuthDetails } from "../../app/schemas";
const authDetailMock: AuthDetails = {
    token: "Token",
    refreshToken: "RefreshToken",
};

const permissionsMock: Permissions = {
    admin: true,
    user: true,
};

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailMock);
    }
    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock);
    }
}
