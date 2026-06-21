const express = require("express");
const router = express.Router();
const db = require("../Config/ConnectToDB");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql =
    "SELECT * FROM admins WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    res.json({
      message: "Login successful",
      admin: result[0],
    });
  });
});

router.get("/cards", (req, res) => {
  db.query(
    "SELECT * FROM card_submissions ORDER BY created_at DESC",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
});



module.exports = router;