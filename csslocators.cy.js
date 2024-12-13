describe('cssseloctor', () => {
    it('css locators', () => {
cy.visit('http://www.automationpractice.pl/index.php')

cy.get('.search_query.form-control.ac_input').type("T-shirts")

cy.get('.btn.btn-default.button-search').click()
cy.get('.lighter').contains("T-shirts")  /////asserstion



    })
})