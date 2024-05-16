import { ForMonitoring } from "../ports/drivens/for-monitoring";
import { ForManagingUser } from "../ports/drivers/for-managing-user";
import { User, externalUser } from "./schemas";

export class Repository implements ForManagingUser {
    private userList: externalUser[] = [];

    constructor(private readonly logger: ForMonitoring) {}

    async getUser(email: string): Promise<externalUser> {
        const user = this.userList.find((user) => user.email === email);

        if (!user) {
            this.logger.log("Get User", "User not Found");
            throw new Error("User not found");
        }

        return user;
    }

    async createUser(user: User): Promise<externalUser> {
        const userExists = this.userList.find((u) => u.email === user.email);

        if (userExists) {
            this.logger.log("CreateUser", "User alredy Exists");
            throw new Error("Error, User alredy Exists");
        }

        const newUser: externalUser = {
            ...user,
            id: String(this.userList.length + 1),
        };

        this.userList.push(newUser);

        return newUser;
    }
}
