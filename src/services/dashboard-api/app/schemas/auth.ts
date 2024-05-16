export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
    permissions: Permissions;
}

export interface AuthDetails {
    token: string;
    refreshToken: string;
}

export interface Permissions {
    admin: boolean;
    user: boolean;
}
