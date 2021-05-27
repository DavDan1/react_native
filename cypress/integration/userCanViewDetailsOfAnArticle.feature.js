describe('view details of an article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.visit('/');
  });

  describe('clicking on the article in the list', () => {
    beforeEach(() => {
      cy.get('[data-testid=article-1]').click();
    });

    it('is expected to display a title', () => {
      cy.get('[data-testid=title]').should('contain.text', 'My Article');
    });
  });
});
