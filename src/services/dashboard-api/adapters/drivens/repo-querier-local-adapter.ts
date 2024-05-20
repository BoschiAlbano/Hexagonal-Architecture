import { userManagerProxy } from "../../../repository/app/composition.root";
import { RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerieLocalAdapter implements ForRepoQuerying {
    async getUser(emai: string): Promise<RepoUser> {
        return await userManagerProxy.getUser(emai);
    }
    async createUser(user: User): Promise<RepoUser> {
        return await userManagerProxy.createUser(user);
    }
}
