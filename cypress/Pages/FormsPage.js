
const dayjs = require("dayjs")
export class FormPage{
    //locators
    #practiceFormSelector  = ':nth-child(2) > .element-list > .menu-list > #item-0'
    #firstNameSelector = "#firstName"
    #lastNameSeclector = "#lastName"
    #emailSelector="#userEmail"
    #genderSelector="[for='gender-radio-1']"
    #mobileNoSelector="#userNumber"
    #subjectsSelector="#subjectsInput"
    #hobbiesSelector ="label[for='hobbies-checkbox-3']"
    #currentAddressSelector = '#currentAddress'
    #stateSelector = "#state"
    #citySelector="#city"
    #submitButtonSelector = "#submit"
    #modalDocumentSelector = '[role="document"]'
    #tableRowsSelector = "table > tbody > tr >td:nth-child(2)"
    #modalCloseButtonSelector = "#closeLargeModal"


    //Actions
    clickPracticeForms = ()=>{
        cy.get(this.#practiceFormSelector).click()
    }
    enterFirstName = (firstName)=>{
        cy.get(this.#firstNameSelector).type(firstName)
    }
    enterLastName = (lastName)=>{
        cy.get(this.#lastNameSeclector).type(lastName)
    }
    enterEmail = (email)=>{
        cy.get(this.#emailSelector).type(email)
    }
    selectMaleGender = ()=>{
        cy.get("#genterWrapper").find(this.#genderSelector).should("have.text","Male").click()
    }
    enterMobileNumber = (mobileNumber)=>{
        cy.get(this.#mobileNoSelector).type(mobileNumber)

    }
    selectSubjects = (subjects)=>{
        cy.get(this.#subjectsSelector).type(`${subjects}{enter}`)
    }
    selectHobby = ()=>{
        cy.get(this.#hobbiesSelector).click()
    }
    enterCurrentAddress = (currentAddress)=>{
        cy.get(this.#currentAddressSelector).type(currentAddress)
    }
    selectState = (state)=>{
        cy.get(this.#stateSelector).find("input").type(`${state}{enter}`,{force: true})
    }

    selectCity = (city)=>{
        cy.get(this.#citySelector).find("input").type(`${city}{enter}`,{force: true})
    }
    clickSubmit = ()=>{
        cy.get(this.#submitButtonSelector).click()
    }
    verifyData = (formData)=>{
        cy.get(this.#modalDocumentSelector).find(this.#tableRowsSelector).invoke('text').then(text=>{
          Object.keys(formData).map(key=>{
            expect(text).contains(formData[key]);
          })
          expect(text).contains(dayjs().format("DD MMMM,YYYY").toString())

        })

    }
    clickCloseModalButton = ()=>{
        cy.get(this.#modalCloseButtonSelector).click()
    }




}