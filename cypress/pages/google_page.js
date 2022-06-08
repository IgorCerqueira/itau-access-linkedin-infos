class googleSearchPage{

    elements = {
        searchBarInput: () => cy.get('input[title="Pesquisar"]'),
        selectResult: () => cy.get('#rso')
    }

    writeSearch(search){
        this.elements.searchBarInput().type(search);
    }

    selectFirstResultWithoutAd(){
        this.elements.selectResult().children().first().contains("Itaú").click()
    }


}

module.exports = new googleSearchPage()