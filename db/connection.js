const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment]
const pg = knex(config[environment]);
require('dotenv').config();

module.exports = pg;
