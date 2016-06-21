describe('hugo', function() {

    it('get browser', function () {
        browser.driver.get('https://app-qa.hugo.healthcare/#/signup');
        expect(browser.driver.getTitle()).toEqual('Hugo Desktop App');
        console.log("Hello Hugo");
        browser.sleep(5000);

    });
    /*it('Navigation', function () {
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/login');
        browser.sleep(1000);
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/div/div[1]/div/div[2]/label/a/span')).click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/signup');
        browser.sleep(1000);
        var text = browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[1]/h2")).getText();
        expect(text).toContain('Register');
        text = browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[2]/p")).getText();
        expect(text).toContain('Please select which type of account you are interested in:');
        console.log("Header correct");
    });*/
    it('Section2', function () {
        browser.sleep(1000);
        var xyz=browser.driver.findElement(By.xpath('//md-radio-button[starts-with(@id,"radio_")][2]')).click();
        browser.sleep(10000);
        /*xyz.then(
            function(output){
                console.log(output);
            }
        );
        var text1=browser.driver.findElement(contains[(@id,'radio_')]);
        console.log(text1);
        text1.then(function(output){console.log(output);});
         if(text1=="I want to conduct health care research as part of an organization")
        var text=browser.driver.findElement(by.xpath('/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[3]/div/md-radio-group/md-radio-button[2]')).getText();
        expect(text).toContain('I want to conduct health care research as part of an organization');
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[3]/div/md-radio-group/md-radio-button[2]")).click();
        browser.sleep(1000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[1]/div[4]/div/button")).click();
        browser.sleep(2000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[2]/div[2]/p")).getText();
        text=expect(text).toContain(' Would you like to sign-in to Hugo PHR using your Google   ');
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div/div/form/div[1]/div/section[2]/md-radio-group/md-radio-button[2]')).click();
        browser.sleep(1000);
        browser.driver.findElement(By.xpath("/html/body/div/div/div/div/div/form/div[1]/div/section[2]/div[3]/div/button[2]")).click();
        browser.sleep(1000);
        console.log("Now entering the data");*/
    });

});