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

  it("Demoqa - Forms - Practice forms - Verify modal represents same image after form submission",()=>{
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
      })
  })

  it("Demoqa - Interactions - Performing interactions- verify that box elements are resizeable",()=>{
    const interactionPage = new InteractionsPage()
    homePage.verfiyTitle("Toolsqa")
    homePage.clickOnInteractionCard()
    interactionPage.verifyInteractionPageTitle("Interactions")
    interactionPage.verfiySideBarElements()
    interactionPage.clickOnResizable()
    interactionPage.verifyInteractionPageTitle("Resizable")
    interactionPage.verifyBox1Dimensions()
    interactionPage.verfiyElementIsResizable("box1")
    interactionPage.verfiyBox1MinumumDimension()
    interactionPage.verifyBoxMaximumDimension()
    interactionPage.verfiyElementIsResizable("box2")
  })

  it("Demoqa - Bookstore - verify book details and api response is correct",()=>{
    const bookstorePage = new BookStorePage()
    homePage.verfiyTitle("Toolsqa")
    homePage.clickONBookStoreCard()
    bookstorePage.verifyBookStorePageTitle()
    bookstorePage.clickOnBook("Understanding ECMAScript 6")
    bookstorePage.verifyBookDetails()



  })
})