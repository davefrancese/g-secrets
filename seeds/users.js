
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'dave', email: 'dave@gal.com', code: '1234'},
        {id: 2, username: 'mike', email: 'mike@gal.com', code: '5678'},
        {id: 3, username: 'andy', email: 'andy@gal.com', code: '9012'},
        {id: 4, username: 'jake', email: 'jake@gal.com', code: '3456'},
      ]);
    });
};
