// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/chat_guild'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  },
};
