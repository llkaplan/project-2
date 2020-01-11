// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


// Creates a "Item" model that matches up with DB
var Item = sequelize.define("item", {
  name: { 
    type: Sequelize.STRING,
    validate: {
      max: 100,
      min: 1,
    }
  },
  description: { 
    type: Sequelize.STRING,
    validate: {
      max: 300,
      min: 1,
    }
  },
  price: { 
    type: DataTypes.DECIMAL(10,2),
    validate: {
      isNumeric: true,
    }
  },
  quantity: { 
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    }
  },
  image: { 
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      min: 1,
    }
  },
  person: { 
    type: DataTypes.STRING,
    validate: {
      max: 100,
      min: 1,
    }
  },
  category: { 
    type: DataTypes.STRING,
    validate: {
      max: 100,
      min: 1,
    }
  },
});

// Creates a "Category" model that matches up with DB
var Category = sequelize.define("item", {
  name: { 
    type: Sequelize.STRING,
    validate: {
      max: 100,
      min: 1,
    }
  },
  description: { 
    type: Sequelize.STRING,
    validate: {
      max: 300,
      min: 1,
    }
  },
});

// Syncs with DB
Item.sync();
Category.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Item;
module.exports = Category;
