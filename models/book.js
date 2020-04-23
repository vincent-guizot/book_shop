'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Book extends Model {
    
  }

  Book.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is empty'
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Author is empty'
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
    categori: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate: (book, options) => {
        if(!book.image) {
          book.image = '/assets/no_picture.jpg'
        }
      }
    }
  });

  Book.associate = function(models) {
    Book.belongsToMany(models.Customer, {through: models.Transaction});
    Book.hasMany(models.Transaction);
  };
  return Book;
};