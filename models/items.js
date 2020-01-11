module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: { 
      type: DataTypes.STRING,
      validate: {
        max: 100,
        min: 1,
      }
    },
    description: { 
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      }
    },
    image: { 
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
        min: 1,
      }
    }
  });

  Item.associate = function(models) {
    Item.hasMany(models.Reviews, {
      onDelete: "cascade"
    });
  };

  Item.associate = function (models) {
    Item.belongsTo(models.Category, {
        foreignKey: {
            allowNull: false
        }
    });
};

  return Item;
};





