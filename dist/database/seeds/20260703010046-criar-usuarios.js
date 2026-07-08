"use strict";'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        nome: 'Luis',
        email: 'luis@email.com',
        password_hash: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'João',
        email: 'joao@email.com',
        password_hash: bcrypt.hashSync('1223456', 9),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria',
        email: 'maria@email.com',
        password_hash: bcrypt.hashSync('1123456', 7),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
