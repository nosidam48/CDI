//Create the sequelize object for our Event table
module.exports = function(sequelize, DataTypes) {
  var kids = sequelize.define("kids", {
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      birth_date: {
          type: DataTypes.DATE,
          allowNull: false
      },
      grade: {
          type: DataTypes.STRING,
          allowNull: false
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false
      },
      kid_bio: {
          type: DataTypes.STRING,
          allowNull: false
      },
      need_sponsor: {
          type: DataTypes.BOOLEAN,
          default: false,
          allowNull: false
      },
      donor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  }, {
      freezeTableName: true,
      timestamps: false
  });
  return kids;
};