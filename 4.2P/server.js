const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/plantDB");

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const PlantSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Plant = mongoose.model('Plant', PlantSchema);

const express = require("express");
const app = express();
const PORT = 3000;

// ---------- Middleware (ADD THESE TWO LINES) ----------
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---------- GET API ----------
app.get('/api/plants', async (req, res) => {
  const plants = await Plant.find({});
  res.json({ statusCode: 200, data: plants, message: "Success" });
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
