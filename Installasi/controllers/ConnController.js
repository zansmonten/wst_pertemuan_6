const dbConnection = require("../config/database");

exports.connDB = (req, res) => {
  dbConnection.connect((err) => {
    if (err) {
      res.status(500).send("Gagal terhubung ke database!");
      console.error("Kesalahan koneksi ke database:", err);
    } else {
      res.send("Terhubung ke database!");
      console.log("Berhasil terhubung ke database.");
    }
  });
};
