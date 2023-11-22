const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root@1234',
    database: 'schedulify',
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
