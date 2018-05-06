const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// Routes

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/test", (req, res) => {
  res.render("test");
})

app.listen(port, () => {
  console.log("App Running...");
});