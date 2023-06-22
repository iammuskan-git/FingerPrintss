'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Admins', [{
      email: "muskanhamal2000@gmail.com",
      password: bcrypt.hashSync("muskan11",8),
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Admins', null, {});
    
  }
};
