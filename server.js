var express = require("express");
var app = express();
var path = require("path");
// set the view engine to ejs
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/public", express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(8080);
console.log("Server is listening on port 8080");
