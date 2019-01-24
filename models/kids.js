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
      gender: {
          type: DataTypes.STRING,
          allowNull: false
      },
      birth_date: {
          type: DataTypes.DATEONLY,
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
          defaultValue: true
      },
  }, {
      freezeTableName: true,
      timestamps: false
  });

  // Creating association for kids with users and content
  kids.associate = function(models) {
    kids.belongsToMany(models.users, {through: "KidsUsers"}),
    kids.hasMany(models.content);
    };



  return kids;
};