const db = require("../Config/ConnectToDB");

const submitCard = (req, res) => {
  const { card_type, card_code, amount, email } = req.body;

  const sql = `
    INSERT INTO card_submissions
    (card_type, card_code, amount, email)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [card_type, card_code, amount, email],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Card submitted successfully",
      });
    }
  );
};

const getAllCards = (req, res) => {
  db.query(
    "SELECT * FROM card_submissions ORDER BY id DESC",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
};

module.exports = {
  submitCard,
  getAllCards,
};