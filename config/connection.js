// Require Files - dotenv to help get ignored/hidden variables in .env file.
//                  - keys.js > exports these now process.env variables
//                  - More Notes at end of page >
require('dotenv').config();
// ==+==================+==

// Require Files & Packages, store as variables
// let keys = require('../assets/js/keys');

// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// connect with JAWS_URL or connect with local port
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "aowcs1a2yat0yj51	",
      password: "h5krgzjv0lg5l90s",
      database: "gjd67ipwisqsrdfk"
    });
};

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