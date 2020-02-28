
describe('User can see all the elements on the Home page', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('Displays a title', () => {
        cy.get('#title').should('contain', 'Rock Paper Scissors')
    })

    it('Displays a scoreboad', () => {
        cy.get('#players-score').should('contain', 'Player wins:')
        cy.get('#computers-score').should('contain', 'Computer wins:')
    })
  
    it('Displays a start game button', () => {
        cy.get('#game-button').should('exist');
    })
        
    it('Displays the game rules', () => {
        cy.get('#rules').should('contain', 'Paper beats Rock')
    })


})