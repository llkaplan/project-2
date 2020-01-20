module.exports = function (sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {
    name: {
      type: DataTypes.STRING,
      validate: {
        max: 100,
        min: 1,
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return Cart;
};