// 创建链接
var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: '47.103.13.46',
        port: '3306',
        user: 'root',
        password: 'xhn625',
        database: 'my_blog' // 数据库名称
    });
    return connection;
}

module.exports.createConnection = createConnection;
