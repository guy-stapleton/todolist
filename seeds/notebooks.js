
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notebooks').del()
    .then(function () {
      // Inserts seed entries
      return knex('notebooks').insert([
        {notebook_id: 1, notebook_name: 'Default'},
        {notebook_id: 2, notebook_name: 'Work'},
        {notebook_id: 3, notebook_name: 'Study'}
      ]);
    });
};
