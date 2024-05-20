import { initTRPC } from "@trpc/server";
import { DashboardApi } from "../../app/dashboard-api";
import { RegisterSchema, AuthenticatedUserSchema } from "../../app/schemas";

export function authTRPCAdapter(
    dashboarApi: DashboardApi,
    t: ReturnType<typeof initTRPC.create>
) {
    return t.router({
        login: t.procedure
            .input(RegisterSchema.pick({ email: true, password: true }))
            .output(AuthenticatedUserSchema)
            .mutation(({ input }) =>
                dashboarApi.login(input.email, input.password)
            ),
        Register: t.procedure
            .input(RegisterSchema)
            .output(AuthenticatedUserSchema)
            .mutation(({ input }) => dashboarApi.register(input)),
    });
}
