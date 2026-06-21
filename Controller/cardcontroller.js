const Card = require("../Model/Cardmodel");

const submitCard = async (req, res) => {
  try {
    const { card_type, card_code, amount, email } = req.body;

    const card = await Card.create({
      card_type,
      card_code,
      amount,
      email,
    });

    res.status(201).json({
      message: "Card submitted successfully",
      card,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  submitCard,
  getAllCards,
};