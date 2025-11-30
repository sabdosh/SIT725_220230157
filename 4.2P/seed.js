const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/plantDB");


const PlantSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Plant = mongoose.model("Plant", PlantSchema);

const plants = [
  {
    title: "Aloe Vera",
    image: "images/aloe.webp",
    link: "More info",
    description: "A soothing plant great for skin and air purification.",
  },
  {
    title: "Snake Plant",
    image: "images/snake.webp",
    link: "More info",
    description: "Very hardy and perfect for beginners.",
  },
  {
    title: "Peace Lily",
    image: "images/lilly.webp",
    link: "More info",
    description: "A beautiful indoor plant that cleans the air.",
  },
];

Plant.deleteMany({})
  .then(() => {
    console.log("Old plants removed");
    return Plant.insertMany(plants);
  })
  .then(() => {
    console.log("New plants inserted successfully!");
  })
  .catch((err) => console.error(err))
  .finally(() => mongoose.connection.close());
