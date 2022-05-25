const BASE_URL = 'https://alpaca-community.snowdog.dev/'

describe('Add product to cart', () => {

    it('Add product to cart from a products list page', (size = 32) => {
        let products = 'women'
        cy.visit(`${BASE_URL + products}.html`)

        cy.selectSize(size)
        cy.selectColor()
        cy.addToCart()

        cy.get('[data-ui-id="message-success"]')
            .should('be.visible')

        cy.get('[data-testid="minicart-link"]')
            .click()
            .get('div.minicart-product')
            .should('be.visible')
    })

    it('Add ina compression short to cart from a product page', () => {
        let product = 'ina-compression-short'
        let product_name = 'Ina Compression Short'

        cy.visit(`${BASE_URL + product}.html`)

        cy.selectSize(29)
        cy.selectColor()
        cy.addToCart()

        cy.get('[data-ui-id="message-success"]')
            .should('be.visible')

        cy.get('[data-testid="minicart-link"]')
            .click()
            .get('div.minicart-product')
            .should('be.visible')
            .contains(product_name)
    })

})