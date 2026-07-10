require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Creativo API Running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Creativo server running on port ${PORT}`);
});
