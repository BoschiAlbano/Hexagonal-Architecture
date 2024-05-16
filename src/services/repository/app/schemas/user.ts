export interface User {
    name: string;
    email: string;
    password: string;
}

export interface RepoUser extends Omit<User, "password"> {
    id: string;
}

export interface externalUser extends User {
    id: string;
}
