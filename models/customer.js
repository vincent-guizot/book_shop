'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Customer extends Model{

  }

  Customer.init({
    username:
    {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username is empty'
        }
      }
    },
    password:
    {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password is empty'
        }
      }
    },
    address:
    {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Address is empty'
        }
      }
    },
    phoneNumber:
    {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Phone Number is empty'
        }
      }
    }
  }, {sequelize});

  Customer.associate = function(models) {
    Customer.belongsToMany(models.Bread, {through: models.Transaction});
    Customer.hasMany(models.Transaction);
  };
  return Customer;
};
