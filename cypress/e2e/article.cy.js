/// <reference types='cypress' />

const { generateUser } = require('../support/e2e');

describe('', () => {
  before(() => {
    cy.visit('/');
  });

  it('create the article', () => {
    const { email, username, password } = generateUser();

    cy.login(email, username, password);

    const article = {
      title: `title${Date.now()}`,
      description: `Description${Date.now()}`,
      body: `Any text ${Date.now()}`
    };

    cy.createArticle(article.title, article.description, article.body);
  });

  it.skip('delete the article', function () {
    const { email, username, password } = generateUser();
    cy.login(email, username, password);

    const article = {
      title: `title${Date.now()}`,
      description: `Description${Date.now()}`,
      body: `Any text ${Date.now()}`
    };
    cy.createArticle(article.title, article.description, article.body).then(
      (slug) => {
        cy.deleteArticle(slug);
      }
    );
  });
});
