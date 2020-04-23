'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Books', {
      image: '/assets/no_picture.jpg'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Books', {
      image: ''
    })
  }
};
