import { selectByTestId } from 'cypress/helprers/selectById';

export const updateProfile = (firstname:string, lastName:string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.Lastname').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asdas' },
    body: {
        id: '4',
        first: 'test',
        lastName: 'user',
        age: 12,
        currency: 'EUR',
        country: 'USA',
        city: ' Kyiv',
        username: 'testuser',
        avatar: 'https://media.tenor.com/Q7sPiGp7hhMAAAAC/patrick-bateman-smile.gif',
    },
});

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstname:string, lastName:string): Chainable<void>;
        resetProfile(profileId:string): Chainable<void>

      }
    }
  }
