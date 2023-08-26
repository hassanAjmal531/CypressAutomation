

export class HomePage  {

    formsCardSelector = '.category-cards > :nth-child(2)'
    interactionCardSelector = '.category-cards > :nth-child(5)'
   
    visit = ()=>{
        cy.visit("/")
    }
    clickOnFormsCard = ()=>{
        cy.get(this.formsCardSelector).click()
    }
    clickOnInteractionCard = ()=>{
        cy.get(this.interactionCardSelector).click({force:true})
    }
    
}