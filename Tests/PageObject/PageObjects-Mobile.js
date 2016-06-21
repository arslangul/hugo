var hugo = function () {
   console.log("hello");
};

hugo.login = Object.create({}, {
    userName: { get: function () { return browser.driver.findElement(by.id('txtUserName')); }},
    password: { get: function () { return browser.driver.findElement(by.id('txtPassword')); }},
    typeName: { value: function (keys) { return this.userName.sendKeys(keys); }},
    typePassword: { value: function (keys) { return this.password.sendKeys(keys); }},
    loginButton: { get: function () { return browser.driver.findElement(By.id("btnLogin")); }},
    logoutMenu: { get: function () { return browser.driver.findElement(By.xpath("//span[text() = 'Sign Out']"));; }},
    logoutButton: { get: function () { return browser.driver.findElement(By.xpath('/html/body/div[3]/md-menu-content/md-menu-item/button')); }},
    signIn: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div/div/div/div/p/a')); }},
    hiText: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div/div/div/div/h1')); }}


});
hugo.addRecords = Object.create({}, {
    addButton: { get: function () { return browser.driver.findElement(By.xpath('/html/body/div/div/div[2]/div/div/md-menu/img')); }},
    addHealthRecord: { get: function () { return browser.driver.findElement(By.xpath('/html/body/div[3]/md-menu-content/md-menu-item[1]/button')); }},
    login: { get: function () { return browser.driver.findElement(By.xpath('/html/body/div/div/div/div/div[2]/md-content/div[1]')); }}
});
hugo.Signup = Object.create({}, {
    gettingStarted: { get: function () { return browser.driver.findElement(by.className("btn-primary md-button md-ink-ripple")); }},
    noButton: { get: function () { return browser.driver.findElement(By.xpath("/html/body/div/div/div/div/form/div/div/section[1]/div[2]/button[2]")); }},
    firstName: { get: function () { return browser.driver.findElement(by.id('firstName')); }},
    lastName: { get: function () { return browser.driver.findElement(by.id('lastName')); }},
    email: { get: function () { return browser.driver.findElement(by.id('username')); }},
    password: { get: function () { return browser.driver.findElement(by.id('password')); }},
    submitButton: { get: function () { return browser.driver.findElement(By.id("/html/body/div/div/div/div/form/div/div/section[5]/div[3]/button[2]")); }},
    nextButtonS2: { get: function () { return browser.driver.findElement(By.id("/html/body/div/div/div/div/form/div/div/section[2]/div[3]/button[1]")); }},
    nextButtonS3: { get: function () { return browser.driver.findElement(By.id("/html/body/div/div/div/div/form/div/div/section[3]/div[3]/button[1]")); }},
    nextButtonS4: { get: function () { return browser.driver.findElement(By.id("/html/body/div/div/div/div/form/div/div/section[4]/div[3]/button[1]")); }},



    logoutButton: { get: function () { return browser.driver.findElement(By.id('mbMain_SignOut')); }},
    signIn: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div/div/div/div/p/a')); }},
    typePassword: { value: function (keys) { return this.password.sendKeys(keys); }},
    hiText: { value: function () { return browser.driver.findElement(by.xpath('/html/body/div/div/div/div/h1')); }}



});
hugo.links = Object.create({}, {
    homeUrl: { get: function () { return 'https://m-dev.hugo.healthcare/#/'; }},
    loginStarted: { get: function () { return 'https://m-dev.hugo.healthcare/#/loginStarted'; }},
    loginUrl: { get: function () { return 'https://m-dev.hugo.healthcare/#/login'; }},
    dataSourceUrl: { get: function () { return 'https://m-dev.hugo.healthcare/#/dataSourceList'; }}
});

module.exports = hugo;