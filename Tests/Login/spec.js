var Login = require('../PageObject/PageObjects.js');
var params = require('../conf.js');
var ConnectDB = require('../ConnectDB.js');
//var connectDatabase = new ConnectDB();
//connectDatabase.connection.connect();
describe('hugo', function() {

    it('Open Browser', function() {
        browser.driver.get(Login.links.loginUrl);
        browser.sleep(10000);
    });
    it('Login Credential', function () {
        browser.sleep(10000);
        Login.login.typeName(params.config.params.admin);
        Login.login.typePassword(params.config.params.password);
        Login.login.loginButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.homeUrl);
        console.log("Admin Login Successful");

    });
/*it('Add user', function () {
        Login.sidebar.userMgmt.click();
        Login.addUser.addUserButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(page.addUserUrl);
        console.log("Add User Page");
        browser.sleep(5000);
        Login.addUser.title.sendKeys(params.config.addUser.title);
        Login.addUser.email.sendKeys(params.config.addUser.email);
        Login.addUser.firstName.sendKeys(params.config.addUser.firstName);
        Login.addUser.lastName.sendKeys(params.config.addUser.lastName);
        Login.addUser.dropdown1.click();
        Login.addUser.dropdown1select.click();
        Login.addUser.dropdown2.click();
        Login.addUser.dropdown2select.click();
        Login.addUser.nextButton.click();
        console.log("user added");
    });

    it('Activating User Account',function(done){
        sql = "UPDATE users set active = 1";

        connectDatabase.connection..query(sql, function(err, rows, fields) {
            if (!err) {
                // This is safe because this test won't finish until done is invoked.
                webElem.click();
            }
            done(err);
        });
    });

    it('Delete User', function () {
        sql = "DELETE FROM users WHERE user_id = 1";

        connectDatabase.connection..query(sql, function(err, rows, fields) {
            if (!err) {
                // This is safe because this test won't finish until done is invoked.
                webElem.click();
            }
            done(err);
        });
    });

    it('Add Study', function () {
        browser.sleep(2000);
        Login.sidebar.studyMgmt.click();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.studiesUrl);
        Login.study.addButton.click();
        browser.sleep(1000);
        Login.study.studyName.sendKeys('Study23');
        Login.study.statusDD.click();
        Login.study.statusActive.click();
        Login.study.effectiveDate.sendKeys('6/21/2016');
        browser.sleep(1000);
        Login.study.expiryDate.sendKeys('6/28/2016');
        Login.study.description.sendKeys('Hello');
        Login.study.organization.sendKeys('organization1');
        Login.study.autoOrg.click();
        browser.sleep(1000);
        Login.study.researcher.sendKeys('user');
        Login.study.autoRes.click();

        Login.study.saveButton.click();
        console.log("Study has been added");

    });*/
    it('edit Study', function () {
        Login.sidebar.studyMgmt.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.studiesUrl);
        browser.sleep(2000);
        Login.editStudy.click.click();
        browser.sleep(5000);
        Login.editStudy.editButton.click();
        Login.editStudy.studyName.clear();
        Login.editStudy.effectiveDate.clear();
        Login.editStudy.expiryDate.clear();
        Login.editStudy.description.clear();
        Login.editStudy.studyName.sendKeys('Study22');
        Login.editStudy.statusDD.click();
        Login.editStudy.statusInactive.click();
        Login.editStudy.effectiveDate.sendKeys('6/22/2016');
        Login.editStudy.expiryDate.sendKeys('6/29/2016');
        Login.editStudy.description.sendKeys('Hello Hey');
        Login.editStudy.saveButton.click();
        console.log("Study has been Edited");

    });
    /*it('organization', function () {
        browser.sleep(1000);
        Login.sidebar.organizationMgmt.click();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.organizationsUrl);
        Login.organization.addButton.click();
        browser.sleep(3000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.addOrgUrl);
        Login.organization.orgName.sendKeys('organization 5');
        Login.organization.statusDD.click();
        Login.organization.statusActive.click();
        Login.organization.description.sendKeys('This is description');

    });
    it('Edit organization', function () {

        browser.sleep(2000);
        Login.sidebar.organizationMgmt.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(Login.links.organizationsUrl);
        browser.sleep(1000);
        Login.editOrg.edit.click();
        browser.sleep(1000);
        Login.organization.orgName.clear();
        Login.organization.orgName.sendKeys('organization5');
        Login.organization.statusDD.click();
        Login.organization.statusInactive.click();
        Login.organization.description.sendKeys('This is edited description');
        Login.editOrg.updateButton.click();

    });*/
    it('Logout', function () {
        browser.sleep(1000);
        Login.links.logoutMenu.click();
        browser.sleep(1000);
        Login.links.logoutButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(page.loginUrl);
        console.log("Admin Logout Successful");
    });
});