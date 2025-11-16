var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// /add endpoint using query parameters a and b
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .send("Error: Please provide valid numbers. Example: /add?a=5&b=7");
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

// Start server (this must be LAST)
app.listen(port, () => {
  console.log("Server is RUNNING on http://localhost:" + port);
});
