const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost", // Sesuaikan dengan konfigurasi database Anda
  user: "root", // Sesuaikan dengan username database Anda
  password: "", // Sesuaikan dengan password database Anda
  database: "db_react", // Nama database yang Anda gunakan
  port: 3306, // Port default MySQL, sesuaikan jika berbeda
});

module.exports = dbConnection;
