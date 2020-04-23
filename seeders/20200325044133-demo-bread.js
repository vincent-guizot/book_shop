'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Breads', [
        {
          name : "Bumi",
          chef: "Tere Liye",
          price: 95000,
          category: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Bulan",
          chef: "Tere Liye",
          price: 95000,
          category: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Bintang",
          chef: "Tere Liye",
          price: 95000,
          category:"Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Matahari",
          chef: "Tere Liye",
          price: 95000,
          category: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Komet",
          chef: "Tere Liye",
          price: 95000,
          category: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Komet Minor",
          chef: "Tere Liye",
          price: 95000,
          category:"Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Breads', null, {});

  }
};
