import { Article } from '@/entities/Article';

const defaultArticle = {
    userId: '1',
    title: 'Test article',
    subtitle: 'Walter is gandon',
    img: 'https://media0.giphy.com/media/3ohc10GA6j4XrLWzZK/giphy.gif?cid=6c09b952e40bf9cfff4ce1ecb7174716bebd2a260f071ef'
    + '6&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g',
    views: 24,
    createdAt: '05.05.2033',
    type: [
        'Films',
    ],
    blocks: [],
};

export const createArticle = (article?:Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asdas' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => cy.request({

    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asdas' },

});

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?:Article): Chainable<Article>;
        removeArticle(articleId:string): Chainable<void>

      }
    }
  }
