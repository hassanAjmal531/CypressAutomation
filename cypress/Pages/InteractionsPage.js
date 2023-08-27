export class InteractionsPage{
    interactionsPageTitleSelector = ".main-header"
    sideBarElementsSelector = ".header-wrapper"
    box1Selector = '#resizableBoxWithRestriction'
    box2Selector = '#resizable'
    
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
        cy.get(this.box1Selector).as("box1").debug()
        
    }
    verifyBoxDimensions =()=>{
        this.#getBox1()
        cy.get("@box1").then($element=>{
            
            
            expect($element.width()+2).equal(200)
            expect($element.height()+2).equal(200)
        })
    }
    verfiyElementIsResizable = ()=>{
        // cy.get("@box1").find("span").trigger('mousedown').trigger("mousemove",500,300 ,{force:true}).trigger('mouseup',{force:true})
        // // cy.get("@box1").then($element=>{
        // //     expect($element.width()+2).to.be.gt(200)
        // // })
        cy.get("@box1").find("span",{force:true}).trigger("mousedown").trigger('mousemove', -150, -150,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box1").then($element=>{
            expect($element.width()+2).to.be.lt(200)
            expect($element.height()+2).to.be.lt(200)
        })
        cy.get("@box1").find("span").trigger('mousedown').trigger("mousemove",200,100 ,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box1").then($element=>{
            expect($element.width()+2).to.be.gt(200)
            expect($element.height()+2).to.be.gt(200)
        })
    }
    verfiyBox1MinumumDimension =()=>{
        cy.get("@box1").find("span",{force:true}).trigger("mousedown").trigger('mousemove', -150, -150,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box1").then($element=>{
            expect($element.width()+2).to.be.lt(200)
            expect($element.height()+2).to.be.lt(200)
        })
    }

    verifyBoxMaximumDimension = ()=>{
        cy.get("@box1").find("span").trigger('mousedown').trigger("mousemove",200,100 ,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box1").then($element=>{
            expect($element.width()+2).to.be.gt(200)
            expect($element.height()+2).to.be.gt(200)
        })
    }

    verfiyIfBox2IsResizable = ()=>{
      
        cy.get(this.box2Selector).as("box2")
        cy.get("@box2").find("span",{force:true}).trigger("mousedown").trigger('mousemove', -150, -150,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box2").then($element=>{
            expect($element.width()+2).to.be.lt(200)
            expect($element.height()+2).to.be.lt(200)
        })

        cy.get("@box2").find("span").trigger('mousedown').trigger("mousemove",500,500 ,{force:true}).trigger('mouseup',{force:true})
        cy.get("@box2").then($element=>{
            expect($element.width()+2).to.be.gt(200)
            expect($element.height()+2).to.be.gt(200)
        })

        



    }

    
}
