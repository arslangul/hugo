var Login = require('../PageObject/PageObjects.js');
var params = require('../conf.js');

describe('hugo', function() {

    it('Open Browser', function() {
            browser.driver.get(Login.links.loginUrl);
            browser.sleep(3000);
        });

    it('Login Credential', function () {
        browser.sleep(1000);
        Login.login.typeName(params.config.params.admin);
        Login.login.typePassword(params.config.params.password);
        Login.login.loginButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(page.homeUrl);
        console.log("Researcher Login Successful");

    });
    it('Logout', function () {
        browser.sleep(1000);
        Login.links.logoutMenu.click();
        browser.sleep(1000);
        Login.links.logoutButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(page.loginUrl);
        console.log("researcher Logout Successful");
    });
});