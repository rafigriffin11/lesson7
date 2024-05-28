describe('Frames Test', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('finds text inside of frames', () => {
        cy.visit('https://demoqa.com/frames');
        cy.get('#frame1').then(($iframe) => {
            const iframeContent = $iframe.contents().find('This is a sample page')
        })
    });
    it('finds text inside of frames', () => {
        cy.visit('https://demoqa.com/frames');
        cy.get('#frame2').then(($iframe) => {
            const iframeContent = $iframe.contents().find('This is a sample page')
        })
    });
})




