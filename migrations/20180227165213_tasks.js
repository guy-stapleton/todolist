
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tasks', (table) => {
      table.increments('task_id').primary()
      table.string('task_name')
      table.integer('notebook_id')
    }),
    knex.schema.createTable('notebooks', (table) => {
      table.increments('notebook_id').primary()
      table.string('notebook_name')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tasks'),
    knex.schema.dropTable('notebooks')
  ])
};
