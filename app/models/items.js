// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
/* Rules cheatsheet bellow 
bar: {
  type: Sequelize.STRING,
  validate: {
    is: ["^[a-z]+$",'i'],     // will only allow letters
    is: /^[a-z]+$/i,          // same as the previous example using real RegExp
    not: ["[a-z]",'i'],       // will not allow letters
    isEmail: true,            // checks for email format (foo@bar.com)
    isUrl: true,              // checks for url format (http://foo.com)
    isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
    isIPv4: true,             // checks for IPv4 (129.89.23.1)
    isIPv6: true,             // checks for IPv6 format
    isAlpha: true,            // will only allow letters
    isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
    isNumeric: true,          // will only allow numbers
    isInt: true,              // checks for valid integers
    isFloat: true,            // checks for valid floating point numbers
    isDecimal: true,          // checks for any numbers
    isLowercase: true,        // checks for lowercase
    isUppercase: true,        // checks for uppercase
    notNull: true,            // won't allow null
    isNull: true,             // only allows null
    notEmpty: true,           // don't allow empty strings
    equals: 'specific value', // only allow a specific value
    contains: 'foo',          // force specific substrings
    notIn: [['foo', 'bar']],  // check the value is not one of these
    isIn: [['foo', 'bar']],   // check the value is one of these
    notContains: 'bar',       // don't allow specific substrings
    len: [2,10],              // only allow values with length between 2 and 10
    isUUID: 4,                // only allow uuids
    isDate: true,             // only allow date strings
    isAfter: "2011-11-05",    // only allow date strings after a specific date
    isBefore: "2011-11-05",   // only allow date strings before a specific date
    max: 23,                  // only allow values <= 23
    min: 23,                  // only allow values >= 23
    isCreditCard: true,       // check for valid credit card numbers

    // Examples of custom validators:

    isEven(value) {
      if (parseInt(value) % 2 !== 0) {
        throw new Error('Only even values are allowed!');
      }
    }
*/

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
