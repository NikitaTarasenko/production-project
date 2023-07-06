import { selectByTestId } from 'cypress/helprers/selectById';

describe('Routing', () => {
    describe('User not auth', () => {
        beforeEach(() => {
            cy.viewport(1280, 720);
        });
        it('redirect on main page', () => {
            cy.visit('/');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('redirect opend profile page', () => {
            cy.visit('/profile/1');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('notfoundpage', () => {
            cy.visit('/asdasd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User is authed', () => {
        beforeEach(() => {
            cy.viewport(1280, 720);
            cy.login('admin', '123');
        });
        it('redirect  to profile page', () => {
            cy.visit('/profile/1');
            cy.get('[data-testid=ProfilePage]').should('exist');
        });
        it('redirect   profile page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
