describe('Player is able to choose the item', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('has a players image on initial', () => {
        cy.get('.player-image').should('exist')
    })

    it('has an computer image on initial', () => {
        cy.get('.computer-image').should('exist')
    })

    it('player can choose paper', () => {
        cy.get('#paper').click()
        
    })

    it('player can choose rock', () => {
        cy.get('#rock').click()
    })

    it('player can choose scissors', () => {
        cy.get('#scissors').click()
    })
})
