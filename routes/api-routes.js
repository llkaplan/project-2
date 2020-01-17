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
  //items api route
  app.get("/api/items", function(req,res){
    console.log(req.query.category_id);
    var query = {};
    if (req.query.category_id) {
      query.CategoryId = req.query.category_id;
    }
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });
  app.get("/api/items/:id", function(req,res){
    db.Item.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Category]
    }).then(function(dbItem){
      res.json(dbItem);
    });
  });
  //category api routes
  app.get("/api/categories", function(req,res){
    db.Category.findAll({
      include: [db.Items]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};



