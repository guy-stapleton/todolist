
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_name: 'Pick up drycleaning', notebook_id: 1},
        {task_id: 2, task_name: 'Get report from Susan', notebook_id: 2},
        {task_id: 3, task_name: 'Send birthday to Amy', notebook_id: 1}
      ]);
    });
};
