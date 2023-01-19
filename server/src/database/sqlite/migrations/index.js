const sqliteConnection = require("../../sqlite");

async function migrationsRun() {
    sqliteConnection()
}

module.exports = migrationsRun