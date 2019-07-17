exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('channels', function(table) {
      table.increments('id').primary();
    }),

    knex.schema.createTable('messages', function(table) {
      table.increments('id').primary();
      table.integer('channel_id');
      table.foreign('channel_id').references('channels.id');
      table.string('sent_from');
      table.string('msg');
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable('messages'), knex.schema.dropTable('channels')]);
};
