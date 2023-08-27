

export class HomePage  {

    formsCardSelector = '.category-cards > :nth-child(2)'
    interactionCardSelector = '.category-cards > :nth-child(5)'
    titleImageSelector = "header > a > img"
    booksStoreCardSelector = ".category-cards > :nth-child(6) > :nth-child(1)"
    visit = ()=>{
        cy.visit("/")
    }
    clickOnFormsCard = ()=>{
        cy.get(this.formsCardSelector).click()
    }
    clickOnInteractionCard = ()=>{
        cy.get(this.interactionCardSelector).click({force:true})
    }

    verfiyTitle = ()=>{
        cy.get(this.titleImageSelector).invoke('attr','src').should('contain',"Toolsqa")
    }

    clickONBookStoreCard = ()=>{
        cy.get(this.booksStoreCardSelector).click()

    }
    
}