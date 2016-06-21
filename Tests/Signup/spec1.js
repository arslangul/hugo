describe('hugo', function() {

    it('get browser', function () {
        browser.driver.get('https://app-qa.hugo.healthcare/#/login');
        expect(browser.driver.getTitle()).toEqual('Hugo Desktop App');
        console.log("Hello Hugo");
        browser.sleep(5000);

    });
    it('Navigation', function () {
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/login');
        browser.sleep(1000);
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/div/div[1]/div/div[2]/label/a/span')).click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/signup');
        browser.sleep(1000);
        var text = browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[1]/h2")).getText();
        expect(text).toContain('Register');
        var text = browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[2]/p")).getText();
        expect(text).toContain('Please select which type of account you are interested in:');
        console.log("Header correct");
    });
    it('Section2', function () {
        browser.sleep(1000);
        var text=browser.driver.findElement(By.xpath('//md-radio-button[starts-with(@id,"radio_")][1]')).getText();
        text.then(
            function(output){
                // console.log(output);
                expect(output).toContain('I want to manage my health records');
            }
        );
        browser.driver.findElement(By.xpath('//md-radio-button[starts-with(@id,"radio_")][1]')).click();
        browser.sleep(1000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[4]/div/button")).click();
        browser.sleep(2000);
        text=browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[2]/div[2]/p")).getText();
        var text=expect(text).toContain('Would you like to sign-in to Hugo PHR using your Google username and password?');
        browser.sleep(1000);

        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[2]/div[3]/div/button[2]")).click();
        browser.sleep(1000);
        console.log("Now entering the data");
    });
    it('Section3', function () {
        var text=browser.driver.findElement(by.id('textUserName')).getText();
        expect(text).toContain('Email');
        browser.driver.findElement(by.id('textUserName')).sendKeys("tests@zigron.com");
        var text=browser.driver.findElement(by.id('txtPassword')).getText();
        expect(text).toContain('Password');
        browser.driver.findElement(by.id('txtPassword')).sendKeys("Zigron123");
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[3]/div[2]/md-checkbox/div[1]")).click();
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[3]/div[2]/md-checkbox/div[1]")).click();
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[3]/div[3]/div/button[2]")).click();
        console.log("Now entering the details");
    });
    it('Section4', function () {
        var text=browser.driver.findElement(by.id('textFirstName')).getText();
        expect(text).toContain('First Name');
        browser.driver.findElement(by.id('textFirstName')).sendKeys("Test");
        var text=browser.driver.findElement(by.id('textLastName')).getText();
        expect(text).toContain('Last Name');
        browser.driver.findElement(by.id('textLastName')).sendKeys("Zigron");
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[4]/div[2]/div/button[2]")).click();
        var text=browser.driver.findElement(by.id('textphone')).getText();
        expect(text).toContain('Phone Number');
        browser.driver.findElement(by.id('textphone')).sendKeys("03456789890");
    });
    it('Registered', function () {
        var text=browser.driver.findElement(by.xpath('/html/body/div/div/div/div/div/form/div[2]/h1')).getText();
        expect(text).toContain('Thank You');
        var text=browser.driver.findElement(by.xpath('/html/body/div/div/div/div/div/form/div[2]/h3')).getText();
        expect(text).toContain('For Signing up with Hugo! ');
        var text=browser.driver.findElement(by.xpath('/html/body/div/div/div/div/div/form/div[2]/p')).getText();
        expect(text).toContain('Please check your email for a message with instructions to activate your account');
        browser.driver.findElement(by.id('textFirstName')).sendKeys("Test");
    });

});