describe('hugo', function() {


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
        browser.driver.get('https://app-qa.hugo.healthcare/#/login');*/
    });
    it('Login Credential', function () {
        browser.driver.findElement(by.id('txtUserName')).sendKeys('admin@hugophr.com');
        browser.driver.findElement(by.id('txtPassword')).sendKeys('test');
        browser.sleep(1000);
        browser.driver.findElement(By.id("btnLogin")).click();
        browser.sleep(2000);
        if (expect(browser.driver.getCurrentUrl()).toContain('https://app-qa.hugo.healthcare/#/')) {
            browser.sleep(1000);
            console.log("Admin Login Successful");
        }
    });

    /*it('Filter', function () {
        browser.driver.findElement(By.xpath('//input[starts-with(@id,"input_")][1]')).sendKeys('admin');
        browser.sleep(4000);
        text=browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[1]/td[1]')).getText();
       // console.log(text);
text.then(function(output){
    if(output=='admin@hugophr.com') {
        browser.sleep(1000);
        console.log("Filter is working fine");
    }else
    {
        console.log("Filter is not working");
    }
});

    });*/
    it('View Users', function () {
        browser.sleep(5000);
        var value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-toolbar/div/h3')).getText();
        value.then(function(output) {
            if (output=="View Current Users") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[1]/span')).getText();
        value.then(function(output) {
                if (output=="EMAIL ADDRESS") {
                    console.log("Value "+output+" is Valid");
                }
                else{
                    console.log("Value "+output+" is InValid");
                }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[2]/span')).getText();
        expect(value).toContain('FULL NAME');
                value.then(function(output) {
                    if (output=="FULL NAME") {
                        console.log("Value "+output+" is Valid");
                    }
                    else{
                        console.log("Value "+output+" is InValid");
                    }
                });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[3]/span')).getText();
         value.then(function(output) {
                        if (output=="USER TYPE") {
                            console.log("Value "+output+" is Valid");
                        }
                        else{
                            console.log("Value "+output+" is InValid");
                        }
         });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[4]/span')).getText();
        value.then(function(output) {
                            if (output=="Failed Login Attempts") {
                                console.log("Value "+output+" is Valid");
                            }
                            else{
                                console.log("Value "+output+" is InValid");
                            }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[5]/span')).getText();
        value.then(function(output) {
                                if (output=="ASSOCIATED STUDIES") {
                                    console.log("Value "+output+" is Valid");
                                }
                                else{
                                    console.log("Value "+output+" is InValid");
                                }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[6]/span')).getText();
       value.then(function(output) {
                                    if (output=="ASSOCIATED ORGANIZATIONS") {
                                        console.log("Value "+output+" is Valid");
                                    }
                                    else{
                                        console.log("Value "+output+" is InValid");
                                    }
       });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[7]/span')).getText();
       value.then(function(output) {
                                        if (output=="STATUS") {
                                            console.log("Value "+output+" is Valid");
                                        }
                                        else{
                                            console.log("Value "+output+" is InValid");
                                        }
       });
        value=browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/thead[1]/tr/th[8]/span')).getText();
        value.then(function(output) {
                                            if (output=="PASSWORD RESET") {
                                                console.log("Value "+output+" is Valid");
                                            }
                                            else{
                                                console.log("Value "+output+" is InValid");
                                            }
        });
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[1]/td[1]')).click();
        browser.sleep(3000);
        console.log("View Organization");
    });
it('User Details', function(){
    var value=browser.driver.findElement(By.xpath("//span[text() = 'Identity and Contact Details']")).click();
    value.then(function(output) {
        if (output=="Identity and Contact Details") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Email']")).getText();
    value.then(function(output) {
        if (output=="Email") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Title ']")).getText();
    value.then(function(output) {
        if (output=="Title ") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'First Name ']")).getText();
    value.then(function(output) {
        if (output=="First Name ") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Middle Name ']")).getText();
    value.then(function(output) {
        if (output=="Middle Name ") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Last Name ']")).getText();
    value.then(function(output) {
        if (output=="Last Name ") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Suffix ']")).getText();
    value.then(function(output) {
        if (output=="Suffix") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Gender ']")).getText();
    value.then(function(output) {
        if (output=="Gender ") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    value=browser.driver.findElement(By.xpath("//label[text() = 'Phone Number']")).getText();
    value.then(function(output) {
        if (output=="Phone Number") {
            console.log("Value "+output+" is Valid");
        }
        else{
            console.log("Value "+output+" is InValid");
        }
    });
    });
    it('User Details tab 2', function(){
        browser.driver.findElement(By.xpath("//span[text() = 'Account Settings']")).click();
        browser.sleep(3000);
        var value=browser.driver.findElement(By.xpath("//label[text() = 'User Type']")).getText();
        value.then(function(output) {
            if (output=="User Type") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        value=browser.driver.findElement(By.xpath("//label[text() = 'Password Reset Needed']")).getText();
        value.then(function(output) {
            if (output=="Password Reset Needed") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        value=browser.driver.findElement(By.xpath("//span[text() = 'Status']")).getText();
        value.then(function(output) {
            if (output=="Status") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });

});
    /*it('User Details tab 4', function(){
        browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/form/div[1]/md-content/md-tabs/md-tabs-wrapper/md-next-button/md-icon')).click();
        browser.sleep(1000);
     browser.driver.findElement(By.xpath("//span[text() = 'Account History']")).click();
        browser.sleep(5000);
        var value=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/form/div[1]/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[4]/div/md-content/md-table-container/table/thead/tr/th[1]/span')).getText();
        value.then(function(output) {
            if (output=="Organization Name") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
        value=browser.driver.findElement(by.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/form/div[1]/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[4]/div/md-content/md-table-container/table/thead/tr/th[2]/span')).getText();
        value.then(function(output) {
            if (output=="Organization Description") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
    });*/
    it('User Details tab 5', function(){

        browser.driver.findElement(By.xpath("//span[text() = 'Account History']")).click();
        browser.sleep(5000);
        var value=browser.driver.findElement(By.xpath("//label[text() = 'Created Date']")).getText();
        value.then(function(output) {
            console.log(output);
            if (output=="Created Date") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' In Activation Date']")).getText();
         value.then(function(output) {
            if (output=="In Activation Date") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' Last update date']")).getText();
                 value.then(function(output) {
            if (output=="Last update date") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' Last updated by']")).getText();
                 value.then(function(output) {
            if (output=="Last updated by") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' Last successful login date']")).getText();
                 value.then(function(output) {
            if (output=="Last successful login date") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' Number of failed login attempt']")).getText();
                 value.then(function(output) {
            if (output=="Number of failed login attempt") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' Last failed login time']")).getText();
                 value.then(function(output) {
            if (output=="Last failed login time") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });
         value=browser.driver.findElement(By.xpath("//label[text() = ' Last successful authentication mode']")).getText();
                 value.then(function(output) {
            if (output=="Last successful authentication mode") {
                console.log("Value "+output+" is Valid");
            }
            else{
                console.log("Value "+output+" is InValid");
            }
        });



    });
});
