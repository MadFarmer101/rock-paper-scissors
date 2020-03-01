describe('Game is played by the rules', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('player can choose paper', () => {
        cy.get('#paper').click()
        cy.get('.winner').should('exist', 'Player One Wins!')
        
    })

    it('player can choose paper', () => {
        cy.get('#paper').click()
        cy.get('.winner').should('contain', 'Computer Wins!')
        
    })

    it('player can choose paper', () => {
        cy.get('#paper').click()
        cy.get('.winner').should('contain', "Oops it's a Tie!")
        
    })
})