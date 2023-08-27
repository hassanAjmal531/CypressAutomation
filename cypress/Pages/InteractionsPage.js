export class InteractionsPage{
    interactionsPageTitleSelector = ".main-header"
    sideBarElementsSelector = ".header-wrapper"
    box1Selector = '#resizableBoxWithRestriction'
    box2Selector = ''
    
    verifyInteractionPageTitle = (value)=>{
        cy.get(this.interactionsPageTitleSelector).invoke('text').should("equal", value)
    }
    verfiySideBarElements = ()=>{
        const temp = []
        const testTextArray = ["Elements ","Forms ","Alerts, Frame & Windows ","Widgets","Interactions ","Book Store Application "]
        cy.get(this.sideBarElementsSelector).each($element=>{
            cy.wrap($element).invoke('text').then(text=>{
                temp.push(text)
            })
        })
        expect(temp=== testTextArray)
            
       
    }
    clickOnResizable = ()=>{
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click()
    }
    #getBox1 = ()=>{
        cy.get(this.box1Selector).as("box1")
        
    }
    verifyBoxDimensions =()=>{
        this.#getBox1()
        cy.get("@box1").then($element=>{
            
            
            expect($element.width()+2).equal(200)
            expect($element.height()+2).equal(200)
        })
    }
    verfiyElementIsResizable = ()=>{
        cy.get("@box1").trigger('resize',450, 450)
    }
    
}
