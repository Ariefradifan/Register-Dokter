require('@cypress/xpath');
describe('registerdoctor', () => {
    it('succes visit',()=>{
      cy.visit('https://gampangserver13.yesdok.com/register/dokter')
      cy.contains('Registrasi Dokter')

      // isi kolom register 
      cy.get('[data-testid="regis-doc-email"]').type('rigenpasti10.bisa@mailinator.com')

      //isi kolom password dan konfirmasi password 
      cy.get('[data-testid="regis-doc-password"]').type('ariefrad27')
      cy.get('[data-testid="regis-doc-password-conf"]').type('ariefrad27')

      //isi kolom nama lengkap nama dan gelar 
      cy.get('[data-testid="regis-doc-fullname"]').type('rigen pasti bisa')
      cy.get('[data-testid="regis-doc-username"]').type('bisa10')

      //isi kolom no Handphone 
      cy.get('[data-testid="regis-doc-phone"]').eq(0).type('82737819828')

      //isi kolom tanggal lahir
      cy.get('.el-input__inner').eq(5).click()
      cy.get('.el-date-picker__header-label').eq(0).click()
      cy.get('.el-icon-d-arrow-left').click()
      cy.get('.el-icon-d-arrow-left').click()
      cy.get('.el-icon-d-arrow-left').click()
      cy.get('.cell').eq(6).click()
      cy.get(':nth-child(3) > div > .cell').eq(0).click()
      cy.get('.el-date-table').eq(0).click()

      //isi kolom kelamin 
      cy.get('.el-radio__inner').eq(0).click()
      
      //click button lanjutkan 
      cy.get('[data-testid="regis-doc-btn-continue"]').click()

      //otp 
      //cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div').should('be.visible')

      //input kode otp 
       cy.get('.otp-input').eq(0).type('0')
       cy.get('.otp-input').eq(1).type('0')
       cy.get('.otp-input').eq(2).type('0')
       cy.get('.otp-input').eq(3).type('0')  
    })
})