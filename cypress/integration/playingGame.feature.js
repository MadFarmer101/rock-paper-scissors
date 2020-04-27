describe("Game is played after player chooses an item", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("player gets an outcame message after choosing rock", () => {
    cy.get("#start").click();
    cy.get("#rock").click();
    cy.get(".message").should("exist");
  });

  it("player gets an outcame message after choosing paper", () => {
    cy.get("#start").click();
    cy.get("#paper").click();
    cy.get(".message").should("exist");
  });

  it("player gets an outcame message after choosing scissors", () => {
    cy.get("#start").click();
    cy.get("#scissors").click();
    cy.get(".message").should("exist");
  });
});
