
export class BookStorePage{
    bookstorePageTitleSelector = '.main-header'
    bookSelector = ".ReactTable"
    infoContainerSelector = "#title-wrapper"
    bookTitleSelector = "#userName-value"

    verifyBookStorePageTitle = ()=>{
        cy.get(this.bookstorePageTitleSelector).invoke('text').should("equal", "Book Store")
    }
    clickOnBookAndVerifyApiResponse = (title)=>{
        cy.intercept("GET","https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574").as("bookData")
        cy.get(this.bookSelector).find(".action-buttons a").contains(title).click()
       
       
    }
    verifyBookDetails = ()=>{
        
        cy.get(this.infoContainerSelector).find(this.bookTitleSelector).should("have.text","Understanding ECMAScript 6")
        cy.wait("@bookData").then(res=>{

            const data = {
                isbn: "9781593277574",
                title: "Understanding ECMAScript 6",
                subTitle: "The Definitive Guide for JavaScript Developers",
                author: "Nicholas C. Zakas",
                publish_date: "2016-09-03T00:00:00.000Z",
                publisher: "No Starch Press",
                pages: 352,
                description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
                website: "https://leanpub.com/understandinges6/read"
              }
              
            expect(data).to.deep.equal(res.response.body)
        })
    }
}
  