const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const plants = [
  {
    title: "Aloe Vera",
    image: "images/aloe.webp",
    description: "A soothing plant great for skin and air purification.",
    link: "More info"
  },
  {
    title: "Snake Plant",
    image: "images/snake.webp",
    description: "Very hardy and perfect for beginners.",
    link: "More info"
  },
  {
    title: "Peace Lily",
    image: "images/lilly.webp",
    description: "A beautiful indoor plant that cleans the air.",
    link: "More info"
  }
];

app.get("/api/plants", (req, res) => {
  res.json(plants);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
