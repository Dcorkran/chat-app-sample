exports.seed = function(knex) {
  return knex('messages')
    .del()
    .then(() => knex('channels').del())
    .then(() => knex('channels').insert([{ id: 1 }, { id: 2 }, { id: 3 }]))
    .then(() =>
      knex('messages').insert([
        { channel_id: '1', sent_from: 'John', msg: 'hey all' },
        { channel_id: '1', sent_from: 'Jen', msg: 'hey back' },
        { channel_id: '1', sent_from: 'Luna', msg: 'hey back' },
        { channel_id: '2', sent_from: 'Luna', msg: 'hola' },
      ])
    );
};
