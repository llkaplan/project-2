module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
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
      });

      Category.associate = function(models) {
        Category.hasMany(models.Item, {
          onDelete: "cascade"
        });
      };

      return Category;
}