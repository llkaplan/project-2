var db= require("../models/");

// Routes
// =============================================================
module.exports = function(app) {
  //html routes
  var items = [
    {
      name: "Apple Ipad Pro",
      image: "https://images-na.ssl-images-amazon.com/images/I/61%2BWrV0wJsL._SY741_.jpg",
      price: 847.99
    },
    {
      name: "Babolat Tennis Raquet",
      image: "https://images-na.ssl-images-amazon.com/images/I/61glQogq%2BhL._SL1024_.jpg",
      price: 219.00
    },
    {
      name: "Beats On-Ear Headphones",
      image: "https://images-na.ssl-images-amazon.com/images/I/51vb%2BcxGzQL._SL1000_.jpg",
      price: 199.95
    },
    {
      name: "Dell XPS Laptop",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Yd-xXWdcL._SL1500_.jpg",
      price: 1590.00
    },
    {
      name: "Rocky Road See's Candy",
      image: "https://www.sees.com/dw/image/v2/AATS_PRD/on/demandware.static/-/Sites-sees-catalog/default/dwa98ec21d/images/game-day/rocky-road-football-915-candy-box-alt4.jpg?sw=1036&sh=1036",
      price: 15.00
    },
    {
      name: "Tombow Dual Brush Pen Art Markers",
      image: "https://images-na.ssl-images-amazon.com/images/I/717FzByCecL._SL1500_.jpg",
      price: 16.38
    },
    {
      name: "Shallyshop Bamboo Matcha Brush Bamboo Whisk",
      image: "https://images-na.ssl-images-amazon.com/images/I/614YPHAC6OL._SL1034_.jpg",
      price: 35.00
    },
    {
      name: "Shea Moisture Coconut & Hibiscus Curl & Style Milk",
      image: "https://images-na.ssl-images-amazon.com/images/I/714MmCN8jVL._SL1500_.jpg",
      price: 8.39
    },
    {
      name: "Strathmore 20 Sheet Bristol Pad",
      image: "https://images-na.ssl-images-amazon.com/images/I/71IjZDqvdiL._SL1200_.jpg",
      price: 7.83
    },
    {
      name: "Kindle",
      image: "https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._SL1000_.jpg",
      price: 59.99
    }
  ];
  app.get("/", function(req,res){
    var data ={
      items:[]
    };

    for (var i =0; i<items.length ;i+=1){
      data.items.push(items[i]);
    }

    res.render("index",data);
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



