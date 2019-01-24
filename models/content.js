//Create the sequelize object for our Event table
module.exports = function(sequelize, DataTypes) {
  var content = sequelize.define("content", {
      kid_notes: {
          type: DataTypes.STRING,
          allowNull: false
      },
      kid_pics: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }, {
      freezeTableName: true,
  });

    // Creating association between content and kids
    content.associate = function(models) {
        content.belongsTo(models.kids);
    };
    
  return content;
};