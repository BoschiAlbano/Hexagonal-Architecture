import { Repository } from "../../app/repository";
import { User, externalUser } from "../../app/schemas";
import { ForManagingUser } from "../../ports/drivers";

export class UserManagerProxy implements ForManagingUser {
    constructor(private readonly repository: Repository) {}

    getUser(email: string): Promise<externalUser> {
        return this.repository.getUser(email);
    }

    createUser(user: User): Promise<externalUser> {
        return this.repository.createUser(user);
    }
}
