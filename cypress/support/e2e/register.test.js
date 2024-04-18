describe('registerdoktoer', () => {
    it('Success visit', () => {
        cy.visit('https://gampangserver13.yesdok.com/')
        cy.contains('Konsultasi Gampang!')

        cy.get('.btn-success').eq(0).click()
        cy.get('[data-testid="register-psychologist"]').click()
    })
})