var Login = require('../PageObject/PageObjects.js');
var params = require('../conf.js');
describe('hugo', function() {

    it('Open Browser', function() {
        browser.driver.get(url.loginUrl)
        browser.sleep(3000);
    });
    it('Login Credential', function () {

        Login.login(params.config.params.patient,params.config.params.password);
        browser.sleep(2000);
         expect(browser.driver.getCurrentUrl()).toContain(Login.homeUrl());
         /*Login.login.userName.sendKeys(params.patient);
        browser.sleep(1000);
        Login.password.sendKeys(params.password);
        Login.loginButton.click();
        browser.sleep(1000);

        browser.sleep(1000);
        console.log("researcher Login Successful");
        browser.sleep(1000);
        Login.logoutMenu.click();
        browser.sleep(20000);
        Login.logoutButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.loginUrl);

        browser.sleep(1000);
        console.log("researcher Logout Successful");
*/
    });
});