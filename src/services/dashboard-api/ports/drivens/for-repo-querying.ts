import { RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";

export interface ForRepoQuerying {
    getUser(emai: string): Promise<RepoUser>;
    createUser(user: User): Promise<RepoUser>;
}
