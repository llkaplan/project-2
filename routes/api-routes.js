// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Item= require("../models/Item.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all Item
  app.get("/api/all", function(req, res) {

    // Finding all Items, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Item.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a Item
  app.post("/api/new", function(req, res) {

    console.log("Item Data:");
    console.log(req.body);

    Item.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created Items
      res.end();
    });

  });

};