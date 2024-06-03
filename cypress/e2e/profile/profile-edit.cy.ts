let profileId = "";

describe("Пользователь заходит на страницу профиля", () => {
    beforeEach(() => {
        cy.visit("");
        cy.login().then(data => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it("И профиль успешно загружается", () => {
        cy.getByTestId("ProfileCard.first").should("have.value", "test");
    });
    it("И редактирует его", () => {
        const newName = "new";
        const newLastname = "lastname";
        cy.updateProfile(newName, newLastname);
        cy.getByTestId("ProfileCard.first").should("have.value", "new");
        cy.getByTestId("ProfileCard.lastname").should("have.value", "lastname");
    });

    // it("Переход открывает страницу со списком статей", () => {
    //     cy.visit("/articles");
    //     cy.get(selectByTestId("ArticlesPage")).should("exist");
    // });
});
