/*describe('hugo', function() {

    it('get browser', function () {
        browser.driver.get('https://app-qa.hugo.healthcare/#/login');
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
        browser.driver.get('https://app-qa.hugo.healthcare/#/login');
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
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/');
        browser.sleep(3000);
        browser.driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/md-sidenav/md-content/md-list[3]/md-list-item/button")).click();
        browser.sleep(3000);
        if(expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/studies'))
        {
            browser.sleep(1000);
            var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/h1")).getText();
            browser.sleep(1000);
            expecr(text).toContain('STUDY MANAGEMENT');
            text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/md-toolbar/md-toolbar/div/h3")).getText();
            expecr(text).toContain('View Studies');
            if(expecr(text).toContain('View Studies')){
                console.log("Study Management Page Opened");
            }

        }
    });

   it('Add Study', function () {
        browser.sleep(10000);
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/md-toolbar/button')).click();
        browser.sleep(3000);
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/addStudy');
        browser.sleep(3000);
        var text=browser.driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/h3")).getText();
        expect(text).toContain('Add New Study');
        browser.driver.findElement(by.name('studyName')).clear();
        browser.driver.findElement(by.name('studyName')).sendKeys("Study 4");
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[1]/md-input-container[2]/md-select/md-select-value/span[1]')).click();
        browser.sleep(2000);
        browser.driver.findElement(by.xpath('/html/body/div[3]/md-select-menu/md-content/md-option[1]/div')).click();
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[2]/md-datepicker[1]/div/button')).click();
        browser.sleep(2000);
        var xyz=browser.driver.findElement(By.xpath('/html/body/div[4]/div[2]/md-calendar/div/md-virtual-repeat-container/div/div[2]/table/tbody[4]/tr[2]/td[3]/span')).click();
        browser.driver.findElement(by.name('description')).sendKeys("This is demo description");
        browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[7]/button[1]')).click();

        console.log("New Study added");
});
    it('View Study', function () {
        browser.sleep(5000);
        browser.driver.get('https://app-qa.hugo.healthcare/#/studies');
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/md-toolbar/md-table-container/table/tbody/tr[1]/td[1]/a')).click();
        browser.sleep(3000);
        var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/form/div/md-content/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[1]/span")).getText();
        expect(text).toContain('View Study');
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/a')).click();
        browser.sleep(5000);
        browser.driver.get('https://app-qa.hugo.healthcare/#/studies');


        console.log("View Study");
    });
   it('Edit Organization', function () {
        browser.sleep(3000);
        var xyz=browser.driver.findElement(By.xpath('//tr[@class="md-row ng-scope"]//td[./text() = "organization2"]')).click();
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
        /*var text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[3]/td[2]")).getText();
        expect(text).toContain('This is new Demo Organization');
    });*/
    describe('Users factory', function() {
        it('has a dummy spec to test 2 + 2', function() {
            // An intentionally failing test. No code within expect() will never equal 4.
            expect().toEqual(4);
        });
    });
