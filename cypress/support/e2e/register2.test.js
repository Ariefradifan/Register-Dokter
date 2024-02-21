require('@cypress/xpath');
describe('registerdoctor', () => {
    it('succes visit',()=>{
        cy.visit('https://server13.yesdok.com/login/')
       
        //User login to yesdok 
        cy.get('.border').contains('Dokter').click()
        cy.contains('Email/Nomor Handphone')
        cy.get('#email').type('rigenpasti.bisa@mailinator.com')
        cy.get('#password').type('ariefrad27')
        cy.get('.btn-success').contains('Masuk').click()
        cy.url('https://server13.yesdok.com/api/3.0/doctoradmin/login').should('include','/register/dokter')
        
        //User upload image profile 
        cy.get('[data-testid="regis-doc-delete-profile"]').eq(0).click()
        cy.get('[data-testid="regis-doc-upload-profile"]', {timeout : 10000}).eq(0).click()
        cy.get('.el-upload').contains('Pilih Gambar').click()
        cy.get('.el-upload__input').eq(0)
        .invoke('show')
        .selectFile('cypress/fixtures/wirosableng.jpeg')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div/div[3]/button[2]').click({multiple: true })

        //User upload Image Ktp 
        cy.get('[data-testid="regis-doc-delete-ktp"]', {timeout : 10000}).eq(0).click()
        

            
        })
       
        

       
    })
//})