import { login } from "./commands/login";
/// <reference types="cypress" />
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add("login", login);
//
//

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<void>;
        }
    }
}

export {};
