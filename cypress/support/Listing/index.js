const el = require('./elements').ELEMENTS;
class Cadastro{
    criarAnuncio(){
        

        cy.get(el.conteudo).click()
        cy.get(el.anuncios).click()
        cy.get(el.addAnuncio).click()
        cy.get(el.modeloAnuncio).select('Empresa')
        cy.get(el.nomeAnuncio).type('Sourcing TI').should('have.value','Sourcing TI')
    
    }

    informacoesBasicas(){
        
            cy.get(el.categorias).click()
            cy.get(el.addCategoria).click()
            
            cy.get(el.conta).click().click()
            cy.get(el.addConta).click()
            cy.get(el.dataExpiracao).click()
            cy.get(el.addData).click()
        
            cy.get(el.checkbox).click().should('be.checked')
        
            cy.get(el.resumo).type('Empresa de tecnologia focada em outsourcing')
            cy.get(el.descricao).type('Empresa de tecnologia focada em outsourcing com sede em...')
            cy.get(el.keywords).type('outsourcing, tecnologia{enter}')
        
    }

    contato(){
        
        cy.get(el.email).type('contato@sourcingit.com.br')
        cy.get(el.website).type('www.outsourcingit.com')
        cy.get(el.telefone).type('(14)39199999')
        cy.get(el.endereco).type('Rua Batista de Carvalho')
        cy.get(el.complemento).type('Prédio de esquina')
        cy.get(el.cep).type('17010-000')
        cy.get(el.pais).select('Brasil').should('exist',el.estado)
        cy.get(el.estado).select('São Paulo').should('exist',el.cidade)
        cy.get(el.cidade).select('Bauru')
        cy.get(el.referencia).type('Próximo a praça')
        
    }

    redesSociais(){
        cy.get(el.facebook).type('https://www.facebook.com/outsourcing.it')
        cy.get(el.instagram).type('https://www.instagram.com/outsourcing.it')
        cy.get(el.twitter).type('https://twitter.com/outsourcing.it')
    }

    diferenciais(){
        cy.get(el.campoIcone).click()
        cy.get(el.icone).click()
        cy.get(el.nomeIcone).type('Servidores')
        cy.get(el.addIcone).click()

    }

    funcionamento(){
        for (let i = 1; i < 6; i++) {
            cy.get(el.campoDiaSemana).click()
            cy.get(".col-sm-6 > .selectize-control > .selectize-dropdown > .selectize-dropdown-content > [data-value="+i+"]").click()
            cy.get(el.horaInicio).click().type('{selectall}09:00')
            cy.get(el.horaTermino).click().type('{selectall}18:00')
            cy.get(el.addDia).click()
        }
    }

    seo() {
        cy.get(el.seoKeyword).type('outsouring{enter}')
        cy.get(el.seoDescricao).type('{selectall}Especialista em outsourcing com foco em médias e grandes empresas')
    }

    upload(){

        const ARQUIVOS = [ 
            'ti.jpg',
            'ti2.jpg'            
        ];
    
        const fileInputElement = el.addArquivos;
        for (let i = 0; i < ARQUIVOS.length; i++) {
            cy.get(fileInputElement)
            .attachFile(ARQUIVOS[i])
            cy.wait(2000)
        }
    
    }

        confirmarAnuncio(){
        cy.get(el.salvarAlteracoes).click()
        cy.get(el.notificacao).should('be.visible')
    
    }

    
}

export default new Cadastro()