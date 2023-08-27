const dayjs = require("dayjs")
import { HomePage } from "../Pages/HomePage";
import { FormPage } from "../Pages/FormsPage";
import { InteractionsPage } from "../Pages/InteractionsPage";
import { BookStorePage } from "../Pages/BookStorePage";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Automating Tasks On Demo QA Website', () => {
  const homePage = new HomePage()
  
  beforeEach(()=>{
    homePage.visit()
  })

  it.skip("Demoqa - Forms - Practice forms - Verify modal represents same image after form submission",()=>{
    const formPage = new FormPage()
    homePage.clickOnFormsCard();
      cy.fixture("formData").then(formData =>{
        formPage.clickPracticeForms()
        formPage.enterFirstName(formData.firstName)
        formPage.enterLastName(formData.lastName)
        formPage.enterEmail(formData.email)
        formPage.selectMaleGender()
        formPage.enterMobileNumber(formData.mobileNo)
        formPage.selectSubjects(formData.subjects)
        formPage.selectHobby(formData.hobby)
        formPage.enterCurrentAddress(formData.currentAddress)
        formPage.selectState(formData.state)
        formPage.selectCity(formData.city)
        formPage.clickSubmit()
        formPage.verifyData(formData)
        formPage.clickCloseModalButton()
        
        
        // cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        // cy.get("#firstName").type(formData.firstName)
        // cy.get("#lastName").type(formData.lastName)
        // cy.get('#userEmail').type(formData.email)
        // cy.get("#genterWrapper").find("[for='gender-radio-1']").should("have.text","Male").click()
        // cy.get('#userNumber').type(formData.mobileNo)
        // cy.get("#subjectsInput").as("selectInput")

        // formData.subjects.map(subject=>cy.get("@selectInput").type(`${subject}{enter}`))

        // cy.get('label[for="hobbies-checkbox-3"]').click()

        // cy.get('#currentAddress').type(formData.currentAddress)

        // cy.get("#state").find("input").type(`${formData.state}{enter}`,{force: true})
        // cy.get("#city").find("input").type(`${formData.city}{enter}`,{force:true})
        // cy.get("#submit").click()
        // cy.get('[role="document"]').find("table > tbody > tr >td:nth-child(2)").each(($el,$index)=>{
        //   // cy.wrap($el).invoke('text').then(text=>{
        //   //   console.log(text, "this is the text in ", $index)
        //   // })
        // })

        // cy.get('[role="document"]').find("table > tbody > tr >td:nth-child(2)").invoke('text').then(text=>{
        //   Object.keys(formData).map(key=>{
        //     if(key === "subjects"){
        //       formData.subjects.map(subject=>{
        //         expect(text).contains(subject)
        //       })
        //     }else{
        //       expect(text).contains(formData[key]);
        //     }

        //   })
        //   expect(text).contains(dayjs().format("DD MMMM,YYYY").toString())

        // })

        // cy.get('#closeLargeModal').click()


        // cy.get()


      })




  })

  it.skip("Demoqa - Interactions - Performing interactions",()=>{
   const interactionPage = new InteractionsPage()
    homePage.verfiyTitle()
    homePage.clickOnInteractionCard()
    interactionPage.verifyInteractionPageTitle("Interactions")
    interactionPage.verfiySideBarElements()
    interactionPage.clickOnResizable()
    interactionPage.verifyInteractionPageTitle("Resizable")
    interactionPage.verifyBoxDimensions()
  })

  it("Demoqa - Bookstore - verify the api response is correct",()=>{
    const bookstorePage = new BookStorePage()
    homePage.verfiyTitle()
    homePage.clickONBookStoreCard()
    bookstorePage.verifyBookStorePageTitle()
    bookstorePage.clickOnBookAndVerifyApiResponse("Understanding ECMAScript 6")
    bookstorePage.verifyBookDetails()



  })
})