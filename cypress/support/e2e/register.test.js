describe('registerdoktoer', () => {
    it('Success visit', () => {
        cy.visit('https://gampangserver13.yesdok.com/')
        cy.contains('Konsultasi Gampang!')
    })
})