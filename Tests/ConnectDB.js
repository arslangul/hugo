function ConnectDB (){
    var mysql = require('../../node_modules/mysql');

    this.connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'your_db_password',
        database: 'your_db_name'
    });
};
module.exports = ConnectDB;