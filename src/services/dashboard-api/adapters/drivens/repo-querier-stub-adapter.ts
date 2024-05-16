import { RepoUser } from "../../../repository/app/schemas/user";
import { ForRepoQuerying } from "../../ports/drivens/for-repo-querying";
import { User } from "../../app/schemas";

const userMock: RepoUser = {
    id: "1",
    name: "Albano",
    email: "Boschi.Albano.Jose@gmail.com",
};

export class RepoQuerieStub implements ForRepoQuerying {
    getUser(_emai: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(_user: User): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}
