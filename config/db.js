const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)


knex.migrate.latest([knexfile]);

module.exports = (knex);




