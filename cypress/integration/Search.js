describe('Search elements', ()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    it('Search for elements with multiples results', ()=>{
        cy.visit('/');
        cy.fixture('index').then((index)=>{
        cy.get(index.searchBox).type('dress');
        cy.get(index.searchButton).click();
        })
        cy.fixture("Searchresult").then((Searchresult)=>{
            cy.get(Searchresult.title).should("contain", "dress");
        })
    })
    it("search for elements with no results", ()=>{
        cy.fixture("index").then((index)=>{
            cy.get(index.searchBox).type("qwerty");
            cy.get(index.searchButton).click();
        })
        cy.fixture("Searchresult").then((Searchresult)=>{
            cy.get(Searchresult.alert).should("contain", "No results were found for your search");
        })
    })
})