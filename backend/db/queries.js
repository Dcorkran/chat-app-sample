const knex = require('./knex.js');

// *** queries *** //

function getMessagesByChannel(id) {
  return knex
    .select('msg', 'sent_from')
    .table('messages')
    .where('channel_id', id)
    .orderBy('created_at', 'asc');
}

function addMessage(data) {
  const { msg, channel, username } = data;
  return knex('messages').insert({ channel_id: channel, sent_from: username, msg }, ['sent_from', 'msg']);
}

module.exports = {
  getMessagesByChannel,
  addMessage,
};
