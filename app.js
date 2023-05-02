// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const bookmarksController = require("./controllers/bookmarkController.js");
app.use("/bookmarks", bookmarksController);

const reviewsController = require("./controllers/reviewsController.js")
app.use("/reviews", reviewsController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
// EXPORT
module.exports = app;