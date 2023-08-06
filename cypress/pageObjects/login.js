const waitingForVisibility = 5000;

module.exports = {
    userEmail() {
        return cy.xpath('//input[@name="username"]', {timeout: waitingForVisibility})
    },
    userPassword() {
        return cy.xpath('//input[@name="password"]', {timeout: waitingForVisibility})
    },
    loginButton() {
        return cy.xpath('//button[@type="submit"]', {timeout: waitingForVisibility})
    },
};