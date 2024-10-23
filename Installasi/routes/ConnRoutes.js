const express = require("express");
const dbConnection = require("../config/database");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Username:", username);
  console.log("Password:", password);

  const query = "SELECT * FROM user WHERE username = ? AND password = ?";

  dbConnection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error saat melakukan query:", err);
      return res.status(500).send({ message: "Internal Server Error" });
    }

    if (results.length > 0) {
      res.json({ user: results[0] });
    } else {
      res.status(401).send({ message: "Username atau Password salah!" });
    }
  });
});

module.exports = router;
