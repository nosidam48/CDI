//Create the sequelize object for our Event table
module.exports = function(sequelize, DataTypes) {
  var content = sequelize.define("content", {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      kid_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
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
  return content;
};