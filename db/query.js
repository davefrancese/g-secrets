const pg = require('./connection')

pg.select().from('gSecrets')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
