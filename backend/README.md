# Chat App Demo - Backend

* Project setup via `createreactapp`
* Built using React
* (Minimal) Styling using Material.ui
* Client side webhooks using `Socket.io`

## Prerequisites

1. You must have `node` and `npm ` installed
2. You must have `PostgreSQL` installed. I used `homebrew` for this. Steps 1 & 2 [here](https://medium.com/@martinlasek/tutorial-how-to-use-postgresql-88cddc858d9f) (minus the create database step. We will do that in step 3 and 4) do a  good job explaining.
3. Type `psql` into the command line (if you receive an error, something went wrong in step 2).
4. Enter the following command - `CREATE DATABASE chat_guild;`
5. Globally install `knex` - `npm install -g knex`


## Installation

1. `cd` into the `backend` directory
2. `npm install`
3. `knex migrate:latest`
4. `knex seed:run`
3. `npm start`

## Usage

Not much to put here. Most exciting stuff will come from the front-end. Check out the terminal to see who is connecting / disconnecting.

## License
[MIT](https://choosealicense.com/licenses/mit/)