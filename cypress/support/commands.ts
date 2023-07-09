import * as CommonComands from './commands/common';
import * as ProfileComands from './commands/profile';
import * as ArticleComands from './commands/article';
import * as CommentComands from './commands/comments';

Cypress.Commands.addAll(CommonComands);
Cypress.Commands.addAll(ProfileComands);
Cypress.Commands.addAll(ArticleComands);
Cypress.Commands.addAll(CommentComands);

export {};
