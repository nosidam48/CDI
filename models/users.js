module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_address: {
          type: DataTypes.STRING,
          allowNull: true
      },
      user_city: {
          type: DataTypes.STRING,
          allowNull: true
      },
      user_state: {
          type: DataTypes.STRING,
          allowNull: true
      },
      user_zip: {
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
  users.associate = function(models) {
    users.belongsToMany(models.kids, {through: "KidsUsers"});
    };

  return users;
};