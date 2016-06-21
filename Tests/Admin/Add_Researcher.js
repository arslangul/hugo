
var Login = require('../Page Object/PageObjects.js');
describe('hugo', function() {
    it('Open Browser', function() {
        Login.go();
    });

    it('Login Credential1', function () {
        browser.driver.findElement(by.id('txtUserName')).sendKeys('admin@hugophr.com');
        browser.driver.findElement(by.id('txtPassword')).sendKeys('test');
        browser.sleep(1000);
        browser.driver.findElement(By.id("btnLogin")).click();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/');
        browser.sleep(1000);
        console.log("Admin Login Successful");
        browser.sleep(3000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div[1]/md-sidenav/md-content/md-list[1]/md-list-item/button")).click();
        browser.sleep(3000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/button")).click();
        browser.sleep(1000);
        if(expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/adduser'))
        {
            browser.sleep(1000);
            console.log("Add User Page");
        }

    });
    it('Add user', function () {
        browser.driver.findElement(by.name('title')).sendKeys('Arslan');
        browser.driver.findElement(by.name('email')).sendKeys('muhammad.arslan@zigron.com');
        browser.driver.findElement(by.name('firstname')).sendKeys('Arslan');
        browser.driver.findElement(by.name('lastname')).sendKeys('Gul');
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[4]/md-input-container[2]/md-select')).click();
        browser.driver.findElement(by.xpath('/html/body/div[3]/md-select-menu/md-content/md-optgroup/md-option[3]')).click();
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[5]/md-input-container/md-select')).click();
        browser.driver.findElement(by.xpath('/html/body/div[4]/md-select-menu/md-content/md-optgroup/md-option[1]')).click();
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[7]/button[1]')).click();
        console.log("user added");
});
});