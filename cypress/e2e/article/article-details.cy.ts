let currentArticleId = '';

describe('visit page with article', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.log(JSON.stringify(article));
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it.skip('articles are here', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it.skip('recommend articles are here', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it.skip('sends comments', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
        // cy.removeComment(currentArticleId);
    });

    it('sends rating', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected= true]').should('have.length', 4);
        // cy.removeComment(currentArticleId);
    });
});
