
describe('User can see all the elements on the Home page', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('Displays a start game button', () => {
        cy.get('#start').should('exist');
    })

    it('Displays the game rules', () => {
        cy.get('#rules').should('contain', 'Paper beats Rock')
    })

    it('Displays a title', () => {
        cy.get('#title').should('contain', 'Rock Paper Scissors')
    })

    it('Displays a rock button', () => {
        cy.get('#start').click()
        cy.get('#rock').should('exist');
    })

    it('Displays a paper button', () => {
        cy.get('#start').click()
        cy.get('#paper').should('exist');
    })

    it('Displays a scissors button', () => {
        cy.get('#start').click()
        cy.get('#scissors').should('exist');
    })
})
