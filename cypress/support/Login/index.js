const el = require('./elements').ELEMENTS;

class Login {
    logar(){
        console.log(el.url)
        cy.visit(el.url) 
        cy.get(el.papeis).click()
        cy.get(el.administrador).click()
        cy.get(el.user).type('{selectall}sitemgr@demodirectory.com')
        cy.get(el.pass).type('{selectall}abc123')
        cy.get(el.botaoLogar).click()

        cy.get(el.username).should('exist')

    }

}

export default new Login()