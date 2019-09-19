// Require Files - dotenv to help get ignored/hidden variables in .env file.
//                  - keys.js > exports these now process.env variables
//                  - More Notes at end of page >
require('dotenv').config();
// ==+==================+==

// Require Files & Packages, store as variables
let keys = require('../assets/js/keys');

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.databaseKey,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;