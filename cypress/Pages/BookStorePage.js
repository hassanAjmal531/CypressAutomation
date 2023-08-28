
export class BookStorePage{
    //locators
    #bookstorePageTitleSelector = '.main-header'
    #bookSelector = ".ReactTable"
    #infoContainerSelector = "#title-wrapper"
    #bookTitleSelector = "#userName-value"

    //Actions
    verifyBookStorePageTitle = ()=>{
        cy.get(this.#bookstorePageTitleSelector).invoke('text').should("equal", "Book Store")
    }
    clickOnBook = (title)=>{

        //Intercept the get requests
        cy.intercept("GET","https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574").as("bookData")
        cy.get(this.#bookSelector).find(".action-buttons a").contains(title).click()
       
       
    }
    verifyBookDetails = ()=>{
        
        cy.fixture("bookData").then(bookData=>{
            cy.get(this.#infoContainerSelector).find(this.#bookTitleSelector).should("have.text","Understanding ECMAScript 6")
            //waiting for request to resolve
            cy.wait("@bookData").then(res=>{  
            expect(bookData).to.deep.equal(res.response.body)
        })
        })
    }
}
  