'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Breads', {
      image: '/assets/no_picture.jpg'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Breads', {
      image: ''
    })
  }
};
