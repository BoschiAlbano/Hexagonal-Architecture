import { LoggerStubAdapter } from "../adapters/drivens";
import { UserManagerProxy } from "../adapters/drivers";
import { Repository } from "./repository";

export const compositionMook = () => {
    const monitorStub = new LoggerStubAdapter();
    const repositoryMock = new Repository(monitorStub);

    const userManagerProxy = new UserManagerProxy(repositoryMock);

    return {
        userManagerProxy,
    };
};

export const { userManagerProxy } = compositionMook();

// const registerMock = {
//     name: "Albano",
//     email: "Boschi.Albano.Jose@gmail.com",
//     password: "123456",
// };

// userManagerProxy.getUser("Boschi.Albano.Jose@gmail.com");
// userManagerProxy.createUser(registerMock);
