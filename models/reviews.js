module.exports = function (sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    name: {
      type: DataTypes.STRING,
      validate: {
        max: 100,
        min: 1,
      }
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

<<<<<<< HEAD


    return Reviews;
}
=======
  return Reviews;
};
>>>>>>> e3b621598ccf0881382867544f2f3089885e2c5b
