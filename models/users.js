var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      address: {
          type: DataTypes.STRING,
          allowNull: true
      },
      city: {
          type: DataTypes.STRING,
          allowNull: true
      },
      state: {
          type: DataTypes.STRING,
          allowNull: true
      },
      zip: {
          type: DataTypes.STRING,
          allowNull: true
      },
      admin_status: {
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: true
      },
      master_admin_status: {
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: true
      },
  }, {
      freezeTableName: true,
      timestamps: false
  });
  // Creating association for users and kids
  User.associate = function(models) {
    User.belongsToMany(models.kids, {through: "KidsUsers"});
    };

  return User;
};