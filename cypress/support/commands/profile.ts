import { selectByTestId } from "../../helpers/selectByTestId";

export const updateProfile = (first: string, lastname: string) => {
    cy.getByTestId("EditableProfileCardHeader.EditButton").click();
    cy.getByTestId("ProfileCard.first").clear().type(first);
    cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
    cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: "PUT",
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: "qwerty" },
        body: {
            id: "4",
            first: "test",
            lastname: "test",
            age: 25,
            currency: "RUB",
            country: "Russia",
            city: "Москва",
            username: "Salma",
            avatar: "https://s0.rbk.ru/v6_top_pics/resized/600xH/media/img/9/23/346989938408239.webp",
        },
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile(first: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
