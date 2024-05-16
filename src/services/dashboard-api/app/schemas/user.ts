import { AuthenticatedUser } from "./auth";
// export type User = Pick<AuthenticatedUser, "email" | "name">;
export interface User extends Pick<AuthenticatedUser, "email" | "name"> {
    password: string;
}
