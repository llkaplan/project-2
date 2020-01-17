var db= require("../models/");

// Routes
// =============================================================
module.exports = function(app) {
  //html routes
  app.get("/", function(req,res){
    var blue = {
      name: "Jocelyn"
    };
    res.render("index",blue);
  });

  app.get("/item",function(req,res){
    res.render("index");
  });
  //reviews api route
  app.get("/api/reviews", function(req,res){

    db.Reviews.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.post("/api/reviews", function(req, res) {
    db.Reviews.create(req.body).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.put("/api/reviews", function(req, res) {
    db.Reviews.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.delete("/api/reviews/:id", function(req, res) {
    db.Reviews.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  //all the reviews for an item
  // app.get("/api/item/:id",function(req,res){
  //   db.Reviews.
  // })
};



