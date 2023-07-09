export const addComment = (comment:string) => {
    cy.getByTestId('AddCommentForm.Input').type(comment);
    cy.getByTestId('AddCommentForm.Button').click();
};

export const removeComment = (commentId: string) => cy.request({

    method: 'DELETE',
    url: `http://localhost:8000/comments/${commentId}`,
    headers: { Authorization: 'asd' },

});

declare global {
    namespace Cypress {
      interface Chainable {
        addComment(comment:string): Chainable<void>;
        removeComment(commentId: string): Chainable<void>;
      }
    }
  }
