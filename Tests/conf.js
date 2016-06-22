var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({

    //dest: 'Tests/Login/screenshots/Patient',
    //dest: 'Tests/Login/screenshots/researcher',
    dest: 'Tests/Login/screenshots/spec',
    //dest: 'Tests/Signup/screenshots/spec',
    //dest: 'Tests/Signup/screenshots/spec1',
    //dest: 'Tests/Admin/screenshots/Add_Admin',
    //dest: 'Tests/Admin/screenshots/Add_Patient',
    // dest: 'Tests/Admin/screenshots/Add_Researcher',
    //dest: 'Tests/Admin/screenshots/Organization',
    //dest: 'Tests/Admin/screenshots/User',
    // dest: 'Tests/Admin/screenshots/Study',
    //dest: 'Tests/MobileApp/screenshots',

    // dest: 'screenshots',

    filename: 'my-report.html'
});
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        //'MobileApp/spec.js'
       'Login/spec.js'
        //'Login/researcher.js'
        //'Login/patient.js'
        //'Signup/spec.js',
        //'Signup/spec1.js',
        // 'Admin/Add_Admin.js'
        //'Admin/Add_Patient.js'
        //'Admin/Add_Researcher.js'
        //'Signup/check.js',
        //'Admin/Organization.js'
        //'Admin/User.js'
        //'Admin/Study.js'

    ],

    capabilities: {
        browserName: 'phantomjs',
        debug: true
    },
    allScriptsTimeout: 500000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000,
        isVerbose: true
    },
    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    onPrepare: function() {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('xmloutput', true, true));
    },
    params: {
        admin: 'admin@hugophr.com',
        patient: 'test@gmail.com',
        researcher: 'researcher@hugophr.com',
        mobile: 'demo@hugophr.com',
        password: 'test'
        },
    addUser:{
        title: 'Arslan',
        email:'muhammad.arslan@zigron.com',
        firstName: 'Arslan',
        lastName: 'Gul'
    }
};