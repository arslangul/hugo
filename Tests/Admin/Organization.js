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
        /*browser.sleep(3000);
        browser.driver.findElement(By.className("md-select-icon")).click();
        browser.sleep(1000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div[1]/md-sidenav/md-content/md-list[2]/md-list-item/button")).click();
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/');
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div[1]/md-sidenav/md-content/md-list[2]/md-list-item/button")).click();
        browser.sleep(5000);
        if(expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/organizations'))
        {
            browser.sleep(1000);
            var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/h1")).getText();
            browser.sleep(1000);
            expecr(text).toContain('ORGANIZATION MANAGEMENT');
            text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-toolbar/div/h3")).getText();
            expecr(text).toContain('View Current Organizations');
            if(expecr(text).toContain('View Current Organizations')){
                console.log("Organization Page");
            }

        }*/
    });
   /* it('count Organization', function () {

        browser.driver.get('https://app-qa.hugo.healthcare/#/organizations');
        browser.sleep(5000);
        browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-pagination/div[2]/md-select/md-select-value')).click();
        browser.sleep(5000);
        browser.driver.findElement(By.xpath('/html/body/div[3]/md-select-menu/md-content/md-option[3]')).click();
        browser.sleep(5000);
        var count=element.all(By.xpath("//table[@class='md-table ng-isolate-scope']/tbody/tr[@class='md-row ng-scope']")).count().then(function(output){
            console.log(output);
        });
        browser.sleep(5000);
        /* element.all(by.repeater('organization')).then(function(posts) {
         var titleElement = posts[0].findElement(by.className('md-row ng-scope'));
         console.log(titleElement);
         });

    });*/

    /*it('Filter', function () {
        browser.driver.get('https://app-qa.hugo.healthcare/#/organizations');
        browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-input-container/input')).click();
        browser.sleep(2000);
        browser.driver.findElement(By.xpath('//input[starts-with(@id,"input_")][1]')).sendKeys('organization1');
        browser.sleep(4000);
        text=browser.driver.findElement(By.xpath("//td[text() = 'organization1']")).getText();
        // console.log(text);
        text.then(function(output){
            if(output=='organization1') {
                browser.sleep(1000);
                console.log("Filter is working fine");
            }else
            {
                console.log("Filter is not working");
            }
        });
    });*/
    it('View Organizations', function () {
        browser.driver.get('https://app-qa.hugo.healthcare/#/organizations');
        browser.sleep(5000);
        var value=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-toolbar/div/h3')).getText();
        value.then(function(output){
            if(output=='View Current Organizations' ){
                console.log("Value"+output+" is valid");
            }
            else{
                console.log("Value"+output+" is Invalid");
            }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[1]/span')).getText();
        value.then(function(output){
            if(output=='ORGANIZATION NAME' ){
                console.log("Value"+output+" is valid");
            }
            else{
                console.log("Value"+output+" is Invalid");
            }
        });

        value=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[2]/span')).getText();
        value.then(function(output){
            if(output=='DESCRIPTION' ){
                console.log("Value"+output+" is valid");
            }
            else{
                console.log("Value"+output+" is Invalid");
            }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[3]/span')).getText();
        value.then(function(output){
            if(output=='STATUS' ){
                console.log("Value"+output+" is valid");
            }
            else{
                console.log("Value"+output+" is Invalid");
            }
        });
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[1]')).click();
        browser.sleep(3000);
        console.log("View Organization");
    });
   /* it('static elements Study ', function () {
        browser.sleep(3000);
        var text=browser.driver.findElement(By.xpath('//span[text() = "Organization Details"]')).getText();
        text.then(function(output) {
            if (output=="ORGANIZATION DETAILS") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });

        browser.sleep(3000);
        text=browser.driver.findElement(By.xpath("//label[text() = 'Organization Name']")).getText();
        text.then(function(output) {
            if ("Organization Name *"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        text=browser.driver.findElement(By.xpath("//label[text() = 'Status']")).getText();
        text.then(function(output) {
            if ("Status"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        text=browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[2]/span')).click();
        browser.sleep(2000);
        text=browser.driver.findElement(By.xpath("//label[text() = 'Created Date']")).getText();
        text.then(function(output) {
            if ("Created Date"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });

        text=browser.driver.findElement(By.xpath("//label[text() = 'Created By']")).getText();
        text.then(function(output) {
            if ("Created By"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        text=browser.driver.findElement(By.xpath("//label[text() = 'Updated Date']")).getText();
        text.then(function(output) {
            if ("Updated Date"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });

        text=browser.driver.findElement(By.xpath("//label[text() = 'Updated By']")).getText();
        text.then(function(output) {
            if ("Updated By"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });

        text=browser.driver.findElement(By.xpath("//label[text() = 'Inactivation Date']")).getText();
        text.then(function(output) {
            if ("Inactivation Date"==output) {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });

    });*/


  /*it('Add Organization', function () {

        browser.sleep(10000);
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/button')).click();
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/addorganization');
        browser.sleep(3000);
        var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/form/h3")).getText();
        expect(text).toContain('Add New Organization');
        browser.driver.findElement(by.name('organizationname')).clear();
        browser.driver.findElement(by.name('description')).clear();
        browser.driver.findElement(by.name('organizationname')).sendKeys('Organization4');
        browser.driver.findElement(by.name('description')).sendKeys('This is new Demo Organization');
        browser.driver.findElement(by.xpath('//html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[1]/md-input-container[2]/md-select/md-select-value/span[2]')).click();
        browser.driver.findElement(by.xpath('/html/body/div[3]/md-select-menu/md-content/md-option[1]')).click();
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[3]/button[1]')).click();
        console.log("New Organization Created");
});
    it('Edit Organization', function () {
        browser.sleep(3000);
        var xyz=browser.driver.findElement(By.xpath('//tr[@class="md-row ng-scope"]//td[text() = "organization2"]')).click();
        browser.sleep(3000);
        var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/h3")).getText();
        expect(text).toContain('Update Organization');
        browser.driver.findElement(by.name('organizationname')).clear();
        browser.driver.findElement(by.name('description')).clear();
        browser.driver.findElement(by.name('organizationname')).sendKeys('Organization4');
        browser.driver.findElement(by.name('description')).sendKeys('This is new Demo Organization');
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div/form/div[1]/md-input-container[2]/md-select/md-select-value/span[2]')).click();
        browser.driver.findElement(by.xpath('/html/body/div[3]/md-select-menu/md-content/md-option[1]')).click();
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div/form/div[3]/button[1]')).click();
        console.log("Organization Edited");
        browser.sleep(5000);
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/organizations');
        var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[3]/td[2]")).getText();
        expect(text).toContain('This is new Demo Organization');

});*/

});
