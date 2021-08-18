const express = require("express");
const apiRoute = require("./routes/api");
const htmlRoute = require("./routes/html");

// creates local server
const PORT = process.env.PORT || 3001;
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
