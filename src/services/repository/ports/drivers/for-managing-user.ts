import { User, externalUser } from "../../app/schemas";

export interface ForManagingUser {
    getUser(email: string): Promise<externalUser>;
    createUser(user: User): Promise<externalUser>;
}
