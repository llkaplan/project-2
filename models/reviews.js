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

    Reviews.associate = function (models) {
        Reviews.belongsTo(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Reviews;
}