const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");


const longContent =
  "NICE!!!!";

let posts = [];
let name;

app.get("/", (req, res) => {
  res.render("index", { name });
});

app.post("/login", (req, res) => {
  name = req.body.name;
  res.redirect("/home");
});

app.post("/home", (req, res) => {
  posts.push({ title: "Mi title", content: longContent });
  res.render("home", { name, posts });
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});