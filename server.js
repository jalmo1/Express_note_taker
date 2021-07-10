const fs = require("fs");
const path = require("path");
const express = require("express");
let app = express();
let notes = require("./db/db.json");

// creates local server
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

app.get("/api/");

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
