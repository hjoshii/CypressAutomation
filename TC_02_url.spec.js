describe('Create post as well as mark and unmark favorite', () => {

    it('Sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('input[type="email"]').type('kamalpal@gmail.com')
        cy.get('input[type="password"]').type('SuperDuper@1')
        cy.get('.btn').contains('Sign in').click()
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
    })

    it('should create new post', () => {
        cy.contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('input[placeholder="Article Title"]').type('GYM')
        cy.get('input[placeholder="What\'s this article about?"]').type('exercise')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test Article')
        cy.get('input[placeholder="Enter tags"]').type('New Tags')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
    })

    it('should Mark-Unmark as favorite', () => {
        cy.get('.nav-link').contains('kamalpal').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.get('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go(-1)
    })


})