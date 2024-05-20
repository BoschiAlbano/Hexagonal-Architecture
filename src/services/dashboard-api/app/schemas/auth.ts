import { z } from "zod";

export const AuthDetailsSchema = z.object({
    token: z.string(),
    refreshToken: z.string(),
});

export const PermissionsSchema = z.object({
    admin: z.boolean(),
    user: z.boolean(),
});

export const AuthenticatedUserSchema = z.object({
    id: z.string(),
    email: z.string().email("invalid email"),
    name: z.string(),
    token: z.string(),
    refreshToken: z.string(),
    permissions: PermissionsSchema,
});

export const RegisterSchema = z.object({
    email: z.string().email("invalid email"),
    name: z.string(),
    password: z.string(),
});

export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;
export type AuthDetails = z.infer<typeof AuthDetailsSchema>;
export type Permissions = z.infer<typeof PermissionsSchema>;

// export interface AuthenticatedUser {
//     id: string;
//     email: string;
//     name: string;
//     token: string;
//     refreshToken: string;
//     permissions: Permissions;
// }

// export interface AuthDetails {
//     token: string;
//     refreshToken: string;
// }

// export interface Permissions {
//     admin: boolean;
//     user: boolean;
// }
