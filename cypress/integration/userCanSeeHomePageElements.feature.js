
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

    it('Does not display a rock button', () => {
        cy.get('#rock').should('not.exist');
    })

    it('Does not display a paper button', () => {
        cy.get('#paper').should('not.exist');
    })

    it('Does not display a scissors button', () => {
        cy.get('#scissors').should('not.exist');
    })
})

describe('User can see match elements after pressing start game button', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('#start').click()
    })

    it('Displays a rock button', () => {
        cy.get('#rock').should('exist');
    })

    it('Displays a paper button', () => {
        cy.get('#paper').should('exist');
    })

    it('Displays a scissors button', () => {
        cy.get('#scissors').should('exist');
    })

    it('Displays a title', () => {
        cy.get('#title').should('contain', 'Rock Paper Scissors')
    })

    it('Displays the game rules', () => {
        cy.get('#rules').should('contain', 'Paper beats Rock')
    })

    it('Does not display start game button', () => {
        cy.get('#start').should('not.exist');
    })
})
