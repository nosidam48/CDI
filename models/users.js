module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("eventTable", {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
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
          allowNull: false
      },
      user_city: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_state: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_zip: {
          type: DataTypes.STRING,
          allowNull: false
      },
      admin_status: {
        type: DataTypes.STRING,
        default: NULL
      },
      kid_id: {
          type: DataTypes.INTEGER
      }
  }, {
      freezeTableName: true,
      timestamps: false
  });
  return users;
};