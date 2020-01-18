var db= require("../models/");

// Routes
// =============================================================
module.exports = function(app) {
  //html routes
<<<<<<< HEAD

  app.get("/", function(req,res){   
    res.render("index",data);
  });

  //items api route
  app.get("/api/items", function(req,res){
    console.log(req.query.category_id);
    var query = {};
    if (req.query.category_id) {
      query.CategoryId = req.query.category_id;
    }
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
=======
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
>>>>>>> e3b621598ccf0881382867544f2f3089885e2c5b
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



