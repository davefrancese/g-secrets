// Update with your config settings.
require('dotenv').config();
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment]

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'gSecrets'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
