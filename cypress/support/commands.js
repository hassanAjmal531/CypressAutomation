// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("verifyResizeable",(selector, positiveX, positiveY, negativeX, negativeY)=>{
    var width = 0;
    var height = 0
    cy.get(selector).then($element=>{
        width = $element.width();
        height = $element.height();

        
    })
    cy.get(selector).find("span",{force:true}).trigger("mousedown").trigger('mousemove', negativeX, negativeY,{force:true}).trigger('mouseup',{force:true})
    cy.get(selector).then($element=>{
        

        expect($element.width()+2).to.be.lt(width)
        expect($element.height()+2).to.be.lt(height)
        width = $element.width();
        height = $element.height();

    })
    cy.get(selector).find("span").trigger('mousedown').trigger("mousemove",positiveX,positiveY ,{force:true}).trigger('mouseup',{force:true})
    cy.get(selector).then($element=>{
        
        expect($element.width()+2).to.be.gt(width)
        expect($element.height()+2).to.be.gt(height)
    })
})