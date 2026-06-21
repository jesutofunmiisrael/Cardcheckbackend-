require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./Config/ConnectToDB");

const cardRoutes = require("./Route/route");
const adminRoutes = require("./Route/adminroute");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/cards", cardRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Gift Card Backend Running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});