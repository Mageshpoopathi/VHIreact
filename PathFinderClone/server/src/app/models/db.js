const mysql = require("mysql");
const dbConfig = require("../config/db.config");

const pool = mysql.createPool({
  connectionLimit:4,
  host: "localhost",
  user: "root",
  password: "root",
  database:"iar"
});

// pool.getConnection((err,connection)=> {
//   if(err)
//   throw err;
//   console.log('Database connected successfully');
//   connection.release();
// });

module.exports = pool;