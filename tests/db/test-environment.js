const knex = require('knex')

const testConfig = require('../../server/db/connection').test

module.exports = {
  getTestDb: () => knex(testConfig),
  initalise: (db) => {
    return db.migrate.latest()
    .then(() => {
    return db.seed.run()
    })
  },
  cleanup: (db) => {
    return db.destroy()
  }
}
