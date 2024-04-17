import "whatwg-fetch";
import { screen } from "@testing-library/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";
import { Profile } from "../../../../entities/Profile";
import { Currency } from "../../../../entities/Currency";
import { Country } from "../../../../entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 21,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin123",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: "1",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe("features/EditableProfileCard", () => {
    test("Режим рид онли должен переключиться", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument();
    });

    test("При отмене значения должны обнуляться", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        await userEvent.clear(screen.getByTestId("ProfileCard.first"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

        await userEvent.type(screen.getByTestId("ProfileCard.first"), "user");
        await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");

        expect(screen.getByTestId("ProfileCard.first")).toHaveValue("user");
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");

        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));

        expect(screen.getByTestId("ProfileCard.first")).toHaveValue("admin");
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
    });

    test("Должна появиться ошибка", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        await userEvent.clear(screen.getByTestId("ProfileCard.first"));

        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));

        expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toBeInTheDocument();
    });

    test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос", async () => {
        const mockPutReq = jest.spyOn($api, "put");
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));

        await userEvent.type(screen.getByTestId("ProfileCard.first"), "user");

        await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
