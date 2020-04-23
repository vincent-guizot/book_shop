'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Books', [
        {
          title : "Bumi",
          author: "Tere Liye",
          price: 95000,
          categori: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title : "Bulan",
          author: "Tere Liye",
          price: 95000,
          categori: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title : "Bintang",
          author: "Tere Liye",
          price: 95000,
          categori:"Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title : "Matahari",
          author: "Tere Liye",
          price: 95000,
          categori: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title : "Komet",
          author: "Tere Liye",
          price: 95000,
          categori: "Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title : "Komet Minor",
          author: "Tere Liye",
          price: 95000,
          categori:"Fiksi",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Books', null, {});
  
  }
};
