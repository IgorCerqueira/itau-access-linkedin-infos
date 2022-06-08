describe('Access About Infos', function(){
    it('Success Access', () => {
            
        cy.visit('https://www.google.com.br/')

        cy.get('input[title="Pesquisar"]').type('Itaú LinkedIn{enter}')
        cy.get('#rso').children().first().contains("Itaú").click()

        var about = cy.get('.tabs__list')
        cy.pause()

        about.first().contains('Visão Geral') //Guia em que fica o Sobre nós
        about.first().should('have.class', 'tab-selected') // Verificando se a guia esta selecionada

        
        
    })
})