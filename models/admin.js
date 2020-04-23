'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Admin extends Model {

  }

  Admin.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize});
  
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};