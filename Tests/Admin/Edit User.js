describe('hugo', function() {
    var toDoPage = require('../Page Object/PageObjects.js');
    describe('hugo', function() {
        it('should navigate to the Hugo Homepage', function() {
            toDoPage.go();
        });
    it('get browser', function () {
        expect(browser.driver.getTitle()).toEqual('Hugo Desktop App');
        console.log("Hello Hugo Admin");
        browser.sleep(3000);
        var text=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/div/div[1]/form/div[1]/h2')).getText();
        expect(text).toContain('Sign In');
        var text=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/div/div[1]/div/div[1]/label/button')).getText();
        expect(text).toContain('Forgot your password?');
        /*browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/div/div[1]/div/div[1]/label/button')).click();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/forgetPassword');
        browser.driver.findElement(by.id('txtUserName')).sendKeys('muhammad.arslan@zigron.com');
        var text=browser.driver.findElement(by.xpath('/md-toast/div/div')).getText();
        browser.driver.findElement(by.id('txtUserName')).clear();
        browser.driver.findElement(by.id('txtUserName')).sendKeys('test@gmail.com');
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[1]/div/form/div[3]/div/button')).click();
        browser.driver.get('https://app-qa.hugo.healthcare/#/login');*/
    });
    it('Login Credential1', function () {
        browser.driver.findElement(by.id('txtUserName')).sendKeys('admin@hugophr.com');
        browser.driver.findElement(by.id('txtPassword')).sendKeys('test');
        browser.sleep(1000);
        browser.driver.findElement(By.id("btnLogin")).click();
        browser.sleep(2000);
        if(expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/'))
        {
            browser.sleep(1000);
            console.log("Admin Login Successful");
        }
        browser.sleep(3000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[5]")).click();
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/button")).click();
        browser.sleep(1000);
        if(expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/adduser'))
        {
            browser.sleep(1000);
            console.log("Add User Page");
        }

    });
    it('Add user', function () {
        browser.driver.findElement(by.name('title')).sendKeys('Admin');
        browser.driver.findElement(by.name('firstName')).clear();
        browser.driver.findElement(by.name('middleName')).clear();
        browser.driver.findElement(by.name('lastName')).clear();
        browser.driver.findElement(by.name('firstName')).sendKeys('Admin');
        browser.driver.findElement(by.name('middleName')).sendKeys('Users');
        browser.driver.findElement(by.name('lastName')).sendKeys('Test2');
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/form/div[2]/button[1]')).click();

        console.log("user Edited");
});
});
});