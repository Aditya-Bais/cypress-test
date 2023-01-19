// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000')
//   })
// })

const newUser={username:"a11@a.com"}

describe('Testing',()=>{
  it('Creating User',()=>{
    cy.visit('http://localhost:3000')
    
    cy.get('a')
      .contains('Login/Register')
      .invoke('attr', 'href')
      .then(($href)=>{cy.visit($href)})
    
    // cy.pause()
    
    cy.get('button')
      .contains('Switch to Sign Up')
      .trigger('click')

    cy.get('input[type=email]')
      .type(newUser.username)
    cy.get('input[type=password]')
      .type('1234567890')

    cy.pause()

    cy.get('button').contains('Sign Up').click()
      
    
    cy.pause()
    cy.get('button')
      .contains('Switch to Login')
      .trigger('click')
    cy.get('h1').contains('Login')
    cy.log("User Created")


  })
  it('Logging in with new user',()=>{
    cy.visit('http://localhost:3000/login#/auth')
      cy.get('input[type=email]').type(newUser.username)
      cy.get('input[type=password]').type('1234567890')
      cy.pause()
      cy.get('button').contains('Login').click()

      if(cy.get('li').contains('Logout')){
        cy.log('Login Done')
      }
  })
    it('Updating Profile',()=>{
      cy.visit('http://localhost:3000/login#/auth')
      cy.get('input[type=email]').type(newUser.username)
      cy.get('input[type=password]').type('1234567890')
      // cy.pause()
      cy.get('button').contains('Login').click()

      if(cy.get('li').contains('Logout')){
        cy.log('Login Done')
      }
    //cy.visit('http://localhost:3000/')
    cy.get('a')
      .contains('Profile')
      .invoke('attr', 'href')
      .then(($href)=>{cy.visit('http://localhost:3000/'+$href)})
      
    
    cy.pause()

    cy.get('input[type=username]').type("testUser@"+((new Date()).getHours())+":"+((new Date()).getMinutes())+'--'+((new Date()).getFullYear()))
    // cy.pause()

    cy.get('textarea[type=text]').type("This a Test post Created on "+((new Date()).getHours())+":"+((new Date()).getMinutes())+'--'+((new Date()).getFullYear()))
    // cy.pause()

    // cy.pause()
    cy.get('input[type=file]').selectFile('C:/Users/aditya_bais/Downloads/R.jpg',{force:true})
    cy.pause()

    cy.get('button').contains('Create Profile').click()
    cy.pause()
  })
  
  Cypress._.times(5, (k) => {
  it('Creating Post',()=>{
      cy.visit('http://localhost:3000/login#/auth')
      cy.get('input[type=email]').type('a2@a.com')
      cy.get('input[type=password]').type('1234567890')
      // cy.pause()
      cy.get('button').contains('Login').click()

      if(cy.get('li').contains('Logout')){
        cy.log('Login Done')
      }
    //cy.visit('http://localhost:3000/')
    cy.get('a')
      .contains('Create Post')
      .invoke('attr', 'href')
      .then(($href)=>{cy.visit('http://localhost:3000/'+$href)})

    const data = require('../fixtures/example')
    // cy.pause()
    cy.get('input[type=title]').type(data.results[k].author+" @ "+((new Date()).getHours())+":"+((new Date()).getMinutes())+'--'+((new Date()).getFullYear()))
    // cy.pause()
    cy.get('textarea[type=text]').type(data.results[k].content)
    // cy.pause()
    // cy.pause()
    cy.get('input[type=file]').selectFile('C:/Users/aditya_bais/Downloads/R.jpg',{force:true})
    // cy.pause()
    cy.pause()
    cy.get('button').contains('Submit').click()
     // cy.pause()
    cy.log('Checking Created Post')
    cy.get('a')
      .contains('My Post')
      .invoke('attr', 'href')
      .then(($href)=>{cy.visit('http://localhost:3000/'+$href)})
  })
  
})

  it("Deleting Post",()=>{
      cy.visit('http://localhost:3000/login#/auth')
      cy.get('input[type=email]').type('a2@a.com')
      cy.get('input[type=password]').type('1234567890')
      // cy.pause()
      cy.get('button').contains('Login').click()

      if(cy.get('li').contains('Logout')){
        cy.log('Login Done')
      }
      //cy.pause()

      cy.get('a')
       .contains('My Post')
       .invoke('attr', 'href')
       .then(($href)=>{cy.visit('http://localhost:3000/'+$href)})
      
      cy.get('.title').each(($ele,index)=>{
        cy.log($ele)
        cy.wrap($ele)
          .invoke('attr', 'href')
          .then(($href)=>{cy.visit('http://localhost:3000/'+$href)
                            cy.log($href)})
        cy.get('button').contains('Delete').click()
        cy.pause()
        cy.get('.btn.btn-danger').click()
          //  cy.pause()
      })
      // cy.pause()
  })


})



