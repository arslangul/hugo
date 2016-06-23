var Login = require('../PageObject/PageObjects.js');
var params = require('../conf.js');

describe('hugo', function() {

    it('Open Browser', function() {
            browser.driver.get(Login.links.loginUrl);
            browser.sleep(3000);
        });

    it('Login Credential', function () {
        browser.sleep(1000);
        Login.login.typeName(params.config.params.researcher);
        Login.login.typePassword(params.config.params.password);
        Login.login.loginButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.homeUrl);
        console.log("Researcher Login Successful");

    });
    it('Verify Response', function () {

        var script = 'var allcookies=document.cookie;' +
            'cookiearray = allcookies.split(";");' +
            'for(var i=0; i<cookiearray.length; i++)'+
            '{'+
            ' value = cookiearray[i].split("%22")[9];'+
            '}'+
            'return value;' ;
        browser.executeScript(script).then(function (output) {
            browser.sleep(3000);
            var values = 'Bearer '+output;
            var script2 = 'return $.ajax({ ' +
                'url: "https://app-qa.hugo.healthcare/rest/researcher/list/study/1",'+
                'type: "GET",' +
                //' headers: { "ABODE-API-KEY" : "web-34fa66f4e0e315f237e80f3f43b8b634"}' +
                'dataType: "application/json",'+
                'contentType: "application/json",'+
                'async : false,' +
                'beforeSend : setHeader' +
                '});'+
                //  'console.log("+output +")'+
                'function setHeader(xhr) {' +
                'xhr.setRequestHeader("Authorization","'+values+'");'+
                '}';
            browser.sleep(3000);
            browser.executeScript(script2).then(function (outputs) {
                var json = JSON.parse(outputs.responseText);
                console.log(json);
            });
        });
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