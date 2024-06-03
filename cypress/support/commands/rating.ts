export const setRate = (starsCount: number, feedback: string) => {
    cy.getByTestId("StarRating." + starsCount).click();
    cy.getByTestId("Rating.Input").type(feedback);
    cy.getByTestId("Rating.Send").click();
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
