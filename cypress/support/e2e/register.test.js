require('@cypress/xpath');
describe('registerdoctor', () => {
    it('succes visit',()=>{
        cy.visit('https://gampangserver13.yesdok.com/register/dokter')
        cy.contains('Registrasi Dokter')

        // isi kolom register 
        cy.get('[data-testid="regis-doc-email"]').type('rigenpasti9.bisa@mailinator.com')

        //isi kolom password dan konfirmasi password 
        cy.get('[data-testid="regis-doc-password"]').type('ariefrad27')
        cy.get('[data-testid="regis-doc-password-conf"]').type('ariefrad27')

        //isi kolom nama lengkap nama dan gelar 
        cy.get('[data-testid="regis-doc-fullname"]').type('rigen pasti bisa')
        cy.get('[data-testid="regis-doc-username"]').type('bisa7')

        //isi kolom no Handphone 
        //cy.xpath('/html/body/div[1]/div/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/div[1]/div/div[2]/div/input').type('82299877658')

        //isi kolom tanggal lahir
        //cy.xpath('/html/body/div[1]/div/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/div[2]/div/div/input').click()
        //cy.get('.el-date-picker__header > :nth-child(3)').click()
        //cy.get('.el-icon-d-arrow-left').click()
        //cy.get('.el-icon-d-arrow-left').click()
        //cy.get('.el-icon-d-arrow-left').click()
        //cy.get('tbody > :nth-child(1) > :nth-child(1) > .cell').click()
        //cy.get(':nth-child(1) > :nth-child(4) > div > .cell').click()
        //cy.get(':nth-child(3) > :nth-child(7) > div > span').click()

        //isi kolom kelamin 
        //cy.xpath('/html/body/div[1]/div/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/div[3]/div/div/div[1]/label/span[1]/span').click()
        
        //click button lanjutkan 
        //cy.xpath('/html/body/div[1]/div/div/div[1]/div[2]/div[2]/div/div[2]/div/button[2]').click()

        //otp 
        //cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div').should('be.visible')

        //input kode otp 
        //cy.get(':nth-child(1) > .otp-input').type('0')
        //cy.get(':nth-child(2) > .otp-input').type('0')
        //cy.get(':nth-child(3) > .otp-input').type('0')
        //cy.get(':nth-child(4) > .otp-input').type('0')
  })
})