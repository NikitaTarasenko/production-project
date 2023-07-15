import * as CommonComands from './commands/common';
import * as ProfileComands from './commands/profile';
import * as ArticleComands from './commands/article';
import * as CommentComands from './commands/comments';
import * as RatingComands from './commands/rating';

Cypress.Commands.addAll(CommonComands);
Cypress.Commands.addAll(ProfileComands);
Cypress.Commands.addAll(ArticleComands);
Cypress.Commands.addAll(CommentComands);
Cypress.Commands.addAll(ArticleComands);
Cypress.Commands.addAll(RatingComands);

export {};
