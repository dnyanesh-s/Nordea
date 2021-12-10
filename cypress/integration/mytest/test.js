/// <reference types="cypress" /> 


describe('My First Suite', function() 
{	
	before(function() 
	{
		cy.visit('http://amazon.com')
	})

  // it('Nikon test case', function()
  // {
  // 	cy.visit('http://amazon.com')
  // 	cy.title().should('eq','Amazon.com. Spend less. Smile more.')
  // 	cy.get('#nav-logo-sprites')
  // 	cy.get('#twotabsearchtextbox').type('Nikon')
  // 	cy.get('#nav-search-submit-button').click()
  // 	cy.get('[data-action="a-dropdown-button"]').click()
  // 	cy.get('#s-result-sort-select_2').click()
  // 	cy.wait(5000)
  // 	cy.get('[data-cel-widget="search_result_1"] [class="a-size-medium a-color-base a-text-normal"]').click()
  // 	cy.get('[class="a-size-base"]').contains('Nikon DX')
  // })

 	it('eGift cards', function()
 	{
  		cy.visit('https://www.amazon.com/dp/B07TMNGSN4/ref=s9_acss_bw_cg_gclptcg_1a1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=8ZK0PVRJRP35B7T78X2N&pf_rd_t=101&pf_rd_p=a7b85e29-6baa-4157-90f1-4cf0facf735b&pf_rd_i=2238192011')
  		cy.get('#gc-customization-type-button-Animated').click()
  		cy.get('#gc-design-title').contains('Unboxing Merry Christmas (Animated)')
  		cy.get('#gc-mini-picker-design-swatch-image-1').click()
	})
})




