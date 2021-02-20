// Set up connection to SQL
// **UPDATE TO INCLUDE PASSWORD AND DATABASE INFO
const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASS,
  database: '',
});

// connect to SQL
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for the ORM 
module.exports = connection;
