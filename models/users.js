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
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
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
      admin_status: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      master_admin_status: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      kid_id: {
          type: DataTypes.INTEGER
      }
  }, {
      freezeTableName: true,
      timestamps: false
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};