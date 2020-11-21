/// <reference types="cypress" />

import Login from '../support/Login'
import Cadastro from '../support/Listing'

describe('arcachallenge', () => {
    it('criarAnuncio', () => {

        //Realizar login
        Login.logar()

        //Criar anuncio
        Cadastro.criarAnuncio()

        //Informações básicas
        Cadastro.informacoesBasicas()

        //Informações de contato
        Cadastro.contato()

        //Redes sociais
        Cadastro.redesSociais()

        //Diferenciais
        Cadastro.diferenciais()

        //Horario de funcionamento
        Cadastro.funcionamento()

        // SEO
        Cadastro.seo()

        //Upload
        Cadastro.upload()
        
        // //Confirmar anuncio
        Cadastro.confirmarAnuncio()

        })
        
    })



