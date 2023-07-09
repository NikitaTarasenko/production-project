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
    it('articles are here', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('recommend articles are here', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('sends comments', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
        // cy.removeComment(currentArticleId);
    });
});
