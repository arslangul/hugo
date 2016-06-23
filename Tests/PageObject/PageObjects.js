var hugo = function () {
    browser.driver.get('https://app-qa.hugo.healthcare/#/login');
};

hugo.login = Object.create({}, {
    userName: { get: function () { return browser.driver.findElement(by.id('txtUserName')); }},
    password: { get: function () { return browser.driver.findElement(by.id('txtPassword')); }},
    loginButton: { get: function () { return browser.driver.findElement(By.id("btnLogin")); }},
    logoutMenu: { get: function () { return browser.driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/md-sidenav/div/md-content/md-menu-bar/md-menu/a/div/h3")); }},
    logoutButton: { get: function () { return browser.driver.findElement(By.xpath('/html/body/div[4]/md-menu-content/md-menu-item/button')); }},
    typeName: { value: function (keys) { return this.userName.sendKeys(keys); }},
    typePassword: { value: function (keys) { return this.password.sendKeys(keys); }}

});

hugo.addUser = Object.create({}, {
    addUserButton: { get: function () { return browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/button")); }},
    title: { get: function () { return browser.driver.findElement(by.name('title')); }},
    email: { get: function () { return browser.driver.findElement(by.name('email')); }},
    firstName: { get: function () { return browser.driver.findElement(by.name('firstname')); }},
    lastName: { get: function () { return browser.driver.findElement(by.name('lastname')); }},
    dropdown1: { value: function (keys) { return browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[4]/md-input-container[2]/md-select')); }},
    dropdown1select: { get: function (keys) { return browser.driver.findElement(by.xpath('/html/body/div[3]/md-select-menu/md-content/md-optgroup/md-option[1]')); }},
    dropdown2: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[5]/md-input-container/md-select')); }},
    dropdown2select: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div[4]/md-select-menu/md-content/md-optgroup/md-option[1]')); }},
    nextButton: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[7]/button[1]')); }}

});
hugo.study = Object.create({}, {
   addButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/md-toolbar/button')); }},
    studyName: { get: function () { return  browser.driver.findElement(By.xpath('//input[starts-with(@id,"input_")][1]')); }},
    statusDD: { get: function () { return  browser.driver.findElement(By.xpath('//md-select-value[starts-with(@id,"select_value_label_")][1]')); }},
    statusActive: { get: function () { return  browser.driver.findElement(By.xpath('//md-option[starts-with(@id,"select_option_")][1]')); }},
    statusInactive: { get: function () { return  browser.driver.findElement(By.xpath('//md-option[starts-with(@id,"select_option_")][2]')); }},
    effectiveDate: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[2]/md-datepicker/div[1]/input')); }},
    expiryDate: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[2]/div[2]/md-datepicker/div[1]/input')); }},
    description: { get: function () { return  browser.driver.findElement(By.xpath('//textarea[starts-with(@id,"input_")][1]')); }},
    organization: { get: function () { return  browser.driver.findElement(By.xpath('//input[starts-with(@id,"input-")][1]')); }},
    autoOrg: {get: function(){return browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[4]/md-chips/md-chips-wrap/div/md-autocomplete'));}},
    researcher: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/form/div[6]/md-chips/md-chips-wrap/div/md-autocomplete/md-autocomplete-wrap/input')); }},
    autoRes: {get: function(){return browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[6]/md-chips/md-chips-wrap/div/md-autocomplete'));}},
    saveButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[7]/button[1]')); }}

});
hugo.editStudy = Object.create({}, {
    effectiveDate: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/form/div/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div[3]/md-datepicker/div[1]/input')); }},
    studyName: { get: function () { return  browser.driver.findElement(By.xpath('//input[starts-with(@id,"input_")][1]')); }},
    statusDD: { get: function () { return  browser.driver.findElement(By.xpath('//md-select-value[starts-with(@id,"select_value_label_")][1]')); }},
    statusActive: { get: function () { return  browser.driver.findElement(By.xpath('//md-option[starts-with(@id,"select_option_")][1]')); }},
    statusInactive: { get: function () { return  browser.driver.findElement(By.xpath('//md-option[starts-with(@id,"select_option_")][2]')); }},
    expiryDate: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div[3]/div[2]/md-datepicker/div[1]/input')); }},
    description: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/form/div/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div[1]/md-input-container[2]/input')); }},

    click: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/div/md-toolbar/md-table-container/table/tbody/tr[1]/td[1]/a')); }},
    editButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/button')); }},
    statusDD: { get: function () { return  browser.driver.findElement(By.xpath('//md-select-value[starts-with(@id,"select_value_label_")][1]')); }},
    saveButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div[8]/button[1]')); }}

});
hugo.organization=Object.create({},{
    addButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/button')); }},
    orgName: { get: function () { return  browser.driver.findElement(By.xpath('//input[starts-with(@id,"input_")][1]')); }},
    statusDD: { get: function () { return  browser.driver.findElement(By.xpath('//md-select-value[starts-with(@id,"select_value_label_")][1]')); }},
    statusActive: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[3]/md-select-menu/md-content/md-option[1]')); }},
    statusInactive: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[3]/md-select-menu/md-content/md-option[2]')); }},
    description: { get: function () { return  browser.driver.findElement(By.xpath('//textarea[starts-with(@id,"input_")][1]')); }},
    saveButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/md-content/div[2]/md-content/div/form/div[3]/button[1]')); }}
});

hugo.editOrg=Object.create({},{
    edit: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/md-table-container/table/tbody/tr[1]/td[1]')); }},
    updateButton: { get: function () { return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-tabs/md-tabs-content-wrapper/md-tab-content[1]/div/md-content/div/form/div[3]/button[1]')); }}

});
hugo.sidebar = Object.create({}, {
    userMgmt: { get: function () { return  browser.driver.findElement(By.xpath('//button[text() = "USER  Management"]')); }},
    studyMgmt: { get: function () {return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[1]/md-sidenav/md-content/md-list[3]/md-list-item/button'));}},
    organizationMgmt: { get: function () {return  browser.driver.findElement(By.xpath('/html/body/div/div/div/div[1]/md-sidenav/md-content/md-list[2]/md-list-item/button'));}},
    addUserButton: { get: function () {  return browser.driver.findElement(By.xpath("/html/body/div/div/div/div[2]/md-content/div[2]/md-content/md-toolbar/button"));}}
});
hugo.links = Object.create({}, {
    homeUrl: { get: function () { return 'https://app-qa.hugo.healthcare/#/'; }},
    loginUrl: { get: function () { return 'https://app-qa.hugo.healthcare/'; }},
    addUserUrl: { get: function () { return 'https://app-qa.hugo.healthcare/#/adduser'; }},
    studiesUrl: { get: function () { return 'https://app-qa.hugo.healthcare/#/studies'; }},
    addStudyUrl: { get: function () { return 'https://app-qa.hugo.healthcare/#/addStudy'; }},
    organizationsUrl: { get: function () { return 'https://app-qa.hugo.healthcare/#/organizations'; }},
    addOrgUrl: { get: function () { return 'https://app-qa.hugo.healthcare/#/addorganization'; }}

});

module.exports = hugo;