
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1, secret: 'This is daves secret'},
        {id: 2, secret: 'This is mikes secret'},
        {id: 3, secret: 'This is andys secret'},
        {id: 4, secret: 'This is jakes secret'}
      ]);
    });
};
