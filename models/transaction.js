'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Transaction extends Model {
    getTotalPrice() {
      return this.amount * this.Bread.price;
    }
  }

  Transaction.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    date: DataTypes.DATE,
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 99
      }
    },
    CustomerId: DataTypes.INTEGER,
    BreadId: DataTypes.INTEGER
  }, {
     sequelize,
    hooks: {
      beforeCreate: (transaction, options) => {
        if(!transaction.date) {
          transaction.date = new Date();
        }
      }
    }
  });
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Customer);
    Transaction.belongsTo(models.Bread);
  };
  return Transaction;
};
