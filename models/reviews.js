module.exports = function (sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    name: {
      type: DataTypes.STRING,
      validate: {
        max: 100,
        min: 1,
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemID: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  });



  return Reviews;
};
