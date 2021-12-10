describe('AmazonSuite', function() 
{	
	before(function()                                                //hook used before every suite
	{
    cy.fixture('variables').then(function(data){
      this.data=data
    })
		
	})

  it('Nikon search test case', function()                           //test case for search functionality
  {
    cy.goToUrl(this.data.url)
  	cy.title().should('eq',this.data.amazonTitle)                  //amazon title check
  	cy.get(this.data.amazonLogo)                                   //amazon logo check                                       
  	cy.get(this.data.searchBox).type(this.data.NikonText)          //type in search box
  	cy.get(this.data.searchButton).click()                         //click search button
  	cy.get(this.data.sortButton).click()                           //click sort button
  	cy.get(this.data.priceHighToLow).click()                       //select option price high to low
  	cy.wait(5000)                                                  //wait for 5 sec
  	cy.get(this.data.secondProduct).click()                        //click on second product
  	cy.get(this.data.compatibility).contains('Nikon DX')           //validate 
  })
})