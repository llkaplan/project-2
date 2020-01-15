var db= require("../models/");

// Routes
// =============================================================
module.exports = function(app) {
  //html routes
  app.get("/", function(req,res){
    db.Item.findAll({}).then(function(data) {
      res.render("index",data);
    });
  });

  app.get("/api/items", function(req,res){
    console.log(req.query);
    db.Item.findAll({}).then(function(dbItems) {      
      res.json(dbItems)
      }).catch(function(err){ 
        console.log("Something went wrong.",err);
        res.status(500).send()
      });
    });
  };
  // Get all Item
  // app.get("/api/all", function(req, res) {

  //   // Finding all Items, and then returning them to the user as JSON.
  //   // Sequelize queries are asynchronous, which helps with perceived speed.
  //   // If we want something to be guaranteed to happen after the query, we'll use
  //   // the .then function
  //   Item.findAll({}).then(function(results) {
  //     // results are available to us inside the .then

  //     res.render("index",data);
  //   });

  // });


};