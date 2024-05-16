import { describe, expect, it } from "vitest";
import { Repository } from "./repository";
import { LoggerStubAdapter } from "../adapters/drivens";
import { User, externalUser } from "./schemas";

describe("Repo", () => {
    const loggerStubadapter = new LoggerStubAdapter();
    const repository = new Repository(loggerStubadapter);

    it.concurrent(
        "It should not get the user if the list is empty",
        async () => {
            // GIVE

            const expectedResult: User = {
                name: "Albano",
                email: "Boschi.Albano.Jose@gmail.com",
                password: "123456",
            };
            // WHERE
            let result;
            try {
                result = await repository.getUser(
                    "Boschi.Albano.Jose@gmail.com"
                );
            } catch (error) {
                // console.log(error);
            }
            // THEN
            expect(result).not.toEqual(expectedResult);
        }
    );

    it.concurrent("should create user", async () => {
        // GIVE
        const mockUser: User = {
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            password: "123456",
        };

        const expectedResult: externalUser = {
            id: "1",
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            password: "123456",
        };
        // WHERE
        let result;
        try {
            result = await repository.createUser(mockUser);
        } catch (error) {
            // console.log(error);
        }
        // THEN

        expect(result).toEqual(expectedResult);
    });

    it.concurrent("should get error if it user exists", async () => {
        // GIVEN
        const mockUser: User = {
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            password: "123456",
        };

        const expectedResult: externalUser = {
            id: "1",
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            password: "123456",
        };

        // WHERE
        let result;
        try {
            result = await repository.createUser(mockUser);
        } catch (error) {
            // console.log(error);
        }
        // THEN
        expect(result).not.toEqual(expectedResult);
    });

    it.concurrent("should get user", async () => {
        // GIVEN
        const externalUser: externalUser = {
            id: "1",
            name: "Albano",
            email: "Boschi.Albano.Jose@gmail.com",
            password: "123456",
        };
        // WEHRE
        let result;

        try {
            result = await repository.getUser("Boschi.Albano.Jose@gmail.com");
        } catch (error) {
            // console.log(error);
        }
        // THEN
        expect(result).toEqual(externalUser);
    });
});
