// to capture a screenshot
cy.screenshot('filename');
// saved as 'filename.png' in the screenshots folder

// customize screenshot behavior
cy.screenshot('filename', {
    capture: 'viewport', // 'viewport', 'full page', or 'runner'
    scale: true, // scale the screenshot to the resloution
    blackout: ['.sensitive-element'], // elements to blackout
});