var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Item.findAll({}).then(function(data){
      console.log(data);
      res.render("index",data);
    });
  });
};

