let profileId = '';

describe('User enters profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('and profile is successfully loaded', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'test');
    });
    it('and profile is edited', () => {
        cy.updateProfile('new', 'lastname');
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.Lastname').should('have.value', 'lastname');
    });
});
