var pages = require('../PageObject/PageObjects-Mobile.js');
var params = require('../conf.js');

describe('hugo', function() {

    it('Open Browser', function() {
        browser.driver.get(pages.links.homeUrl);
        browser.sleep(3000);
        expect(browser.driver.getTitle()).toEqual('Hugo Mobile App');
        browser.sleep(3000);
        var text=pages.login.hiText.getText();
        expect(text).toContain("Hi.");
        console.log("Hugo Mobile App");
    });
    /*it('SignUp', function () {
       pages.Signup.gettingStarted.click();
        browser.sleep(1000);
        console.log("SignUp Without Google Account");
        pages.Signup.noButton.click();
        console.log("FirstName");
        pages.Signup.firstName.sendKeys();
        pages.Signup.nextButtonS2.click();
        console.log("LastName");
        pages.Signup.lastName.sendKeys();
        pages.Signup.nextButtonS3.click();
        console.log("email");
        pages.Signup.email.sendKeys();
        pages.Signup.nextButtonS3.click();
        console.log("Password");
        pages.Signup.password.sendKeys();
        pages.Signup.submitButton.click();
        console.log("User Successfully Created!  Pl'z verify the account");
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
    */
    it('Login Credential', function () {
        browser.driver.get(pages.links.homeUrl);
        browser.sleep(5000);
        pages.login.signIn.click();
        browser.sleep(2000);
        pages.login.userName.sendKeys(params.config.params.mobile);
        pages.login.password.sendKeys(params.config.params.password);
        pages.login.loginButton.click();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toContain(pages.links.homeUrl);
        console.log("Researcher Login Successful");

    });
    it('Add Timeline', function () {
        pages.addRecords.addButton.click();
        browser.sleep(2000);
        pages.addRecords.addHealthRecord.click();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain(pages.links.dataSourceUrl);
        pages.addRecords.login.click();
        browser.sleep(10000);
        expect(browser.driver.getCurrentUrl()).toContain(pages.links.homeUrl);
        console.log("Timeline updated Successfully");

    });
    it('SignOut', function () {
        browser.sleep(2000);
        pages.login.logoutMenu.click();
        browser.sleep(1000);
        pages.login.logoutButton.click();
        browser.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain(pages.links.homeUrl);
        console.log("Logged out of the system Successfully");

    });
    /*it('Delete User', function () {
        sql = "DELETE FROM users WHERE user_id = 1";

        connectDatabase.connection..query(sql, function(err, rows, fields) {
            if (!err) {
                // This is safe because this test won't finish until done is invoked.
                webElem.click();
            }
            done(err);
        });
    });
    /*it('HomePage', function () {

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
                'url: "https://m-dev.hugo.healthcare/patient/v1/self/timeline",'+
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
//console.log(json);
    for (var j = 1; j <= json.length; j++) {

        browser.sleep(5000);
        var text = browser.driver.findElement(By.xpath('/html/body/div/div/md-content/div[1]/div/timeline/ul/timeline-event[' + j + ']/li/timeline-panel/div/timeline-heading/div/h4')).getText();
        //text1 = browser.driver.findElement(By.xpath('/html/body/div/div/md-content/div[1]/div/timeline/ul/timeline-event['+j+']/li/timeline-panel/div/timeline-heading/div/div/div')).getText();
        var start = j - 1;
        text.then(function (text) {
            var flag = true;
            console.log(text);
            for (var i = start; i <= json.length; i++) {
                if (flag) {
                    //console.log(text+" Front");
                    console.log(json[i].Type + " Response");
                    if (json[i].Type == text) {
                        console.log("Value " + text + " == " + json[i].Type);

                    }
                }
            }
        });

    }
});

/*
        browser.driver.findElement(By.id("mbMain_SignOut")).click();
        browser.sleep(3000);
        expect(browser.driver.getCurrentUrl()).toContain('https://m-dev.hugo.healthcare/#/login');*/

});