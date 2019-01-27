//Create the sequelize object for our Event table
module.exports = function(sequelize, DataTypes) {
  var Content = sequelize.define("content", {
      kid_notes: {
          type: DataTypes.STRING,
          allowNull: true
      },
      kid_pics: {
          type: DataTypes.STRING,
          allowNull: true
      }
  }, {
      freezeTableName: true,
  });

    // Creating association between content and kids
    Content.associate = function(models) {
        Content.belongsTo(models.kids);
    };
    
  return Content;
};