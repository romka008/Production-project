let currentArticleId = "";

describe("Пользователь заходит на страницу статьи", () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then(article => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    // Создали статью, все протестили и удалили статью
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it("И видит содержимое статьи", () => {
        cy.getByTestId("ArticleDetails.Info").should("exist");
    });
    it("И видит список рекомендаций", () => {
        cy.getByTestId("ArticleRecommendationsList").should("exist");
    });
    it("И оставляет комментарий", () => {
        cy.getByTestId("ArticleDetails.Info").should("exist");
        cy.getByTestId("AddNewComment").scrollIntoView();
        cy.addComment("text");
        cy.getByTestId("CommentCard.Content").should("have.length", 1);
    });
    it("И ставит оценку", () => {
        cy.getByTestId("ArticleDetails.Info").should("exist");
        cy.getByTestId("RatingCard").scrollIntoView();
        cy.setRate(5, "feedback");
        cy.get("[data-selected=true]").should("have.length", 5);
    });
    it("И ставит оценку (пример с стабом на фикструрах)", () => {
        cy.intercept("GET", { fixture: "article-details.json" });
        cy.getByTestId("ArticleDetails.Info").should("exist");
        cy.getByTestId("RatingCard").scrollIntoView();
        cy.setRate(5, "feedback");
        cy.get("[data-selected=true]").should("have.length", 5);
    });
});
