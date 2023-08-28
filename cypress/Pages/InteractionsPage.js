export class InteractionsPage{

    //locators
    #interactionsPageTitleSelector = ".main-header"
    #sideBarElementsSelector = ".header-wrapper"
    #box1Selector = '#resizableBoxWithRestriction'
    #box2Selector = '#resizable'
    #resizeableMenuSelector = ":nth-child(5) > .element-list > .menu-list > #item-2"
    
    //Actions
    verifyInteractionPageTitle = (value)=>{
        cy.get(this.#interactionsPageTitleSelector).invoke('text').should("equal", value)
    }
    verfiySideBarElements = ()=>{
        const temp = []
        const testTextArray = ["Elements ","Forms ","Alerts, Frame & Windows ","Widgets","Interactions ","Book Store Application "]
        cy.get(this.#sideBarElementsSelector).each($element=>{
            cy.wrap($element).invoke('text').then(text=>{
                temp.push(text)
            })
        })
        expect(temp=== testTextArray)
            
       
    }
    #getBox1 = ()=>{
        cy.get(this.#box1Selector).as("box1")
        
    }
    #getBox2 = ()=>{
        cy.get(this.#box2Selector).as("box2")
    }
    clickOnResizable = ()=>{
        cy.get(this.#resizeableMenuSelector).click()
        this.#getBox1()
        this.#getBox2()

    }
    
    verifyBox1Dimensions =()=>{
        
        cy.get("@box1").then($element=>{
            expect($element.width()+2).equal(200)
            expect($element.height()+2).equal(200)
        })
    }
    verfiyElementIsResizable = (selector)=>{
        switch(selector){
            case "box1":
                cy.verifyResizeable("@box1", 200, 100, -150, -150)
                break
            case "box2":
                cy.verifyResizeable("@box2", 200, 100, -150, -150)
                break;
            default:
                break
                
        }
    }
    verfiyBox1MinumumDimension =()=>{
        cy.get("@box1").find("span",{force:true}).trigger("mousedown").trigger('mousemove', -200, -200,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box1").then($element=>{
            expect($element.width()+2).to.be.lt(200)
            expect($element.height()+2).to.be.lt(200)
        })
    }

    verifyBoxMaximumDimension = ()=>{
        cy.get("@box1").find("span").trigger('mousedown').trigger("mousemove",500,500 ,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box1").then($element=>{
            expect($element.width()+2).to.be.eql(500)
            expect($element.height()+2).to.be.eql(300)
        })
    }
    
}
