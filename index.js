require("dotenv").config();
const express = require("express");
const app = express();
var path = require("path");
// set the view engine to ejs
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Require static assets from public folder
// app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
// Set 'views' directory for any views
// being rendered res.render()
// app.set("views", path.join(__dirname, "views"));

// Set view engine as EJS
// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/public", express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("emote");
  // res.send("HELLO GANESH");
});

// app.listen(8080);
// console.log("Server is listening on port 8080");
app.listen(process.env.PORT || 8080, () =>
  console.log("Server is running at 4000")
);
