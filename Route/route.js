const express = require("express");

const {
  submitCard,
  getAllCards,
} = require("../Controller/cardcontroller");

const router = express.Router();

router.post("/submit", submitCard);

router.get("/all", getAllCards);

module.exports = router;