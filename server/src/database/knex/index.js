const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development)
connection.migrate.latest([config.development]);

module.exports = connection