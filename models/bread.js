'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Bread extends Model {

  }

  Bread.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Bread is empty'
        }
      }
    },
    chef: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Chef is empty'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Price is empty'
        }
      }
    },
    category: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate: (bread, options) => {
        if(!bread.image) {
          bread.image = '/assets/no_picture.jpg'
        }
      }
    }
  });

  Bread.associate = function(models) {
    Bread.belongsToMany(models.Customer, {through: models.Transaction});
    Bread.hasMany(models.Transaction);
  };
  return Bread;
};
