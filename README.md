# Chat App Demo

This app allows you to:

1. Select a user
2. Join a chat room
3. Chat with other users in real time


Below is meant to be a brief writeup of code that I'm proud of, and code that should have been written if time allowed.

## Cool Stuff ✨

* First time using React Hooks! Worked really well for some things (basic state manipulation), but my inexperience with them caused some headache for others (storing socket code in the `useEffect` hook).
* Going off of the above, I got to use functional components and the `useStyles` method. I would definitely use them again.
* Knex (query builder) was a blast to pick back up. Dead simple PostgreSQL table creation / data population / querying.
* Haven't used Web Hooks in a while. After reading the requirements I figured I would be using them, but also looked into service workers for a bit which was interesting.
* While it was out of scope for this project, I had a great time drawing up a potential ERD. Ended up being only using two tables for this project.

## Stuff That I Didn't Do 😢

* No Auth 
  * Anyone can connect to the websocket or pull messages from the db, assuming the username of anyone.
  * Would solve this using `access_tokens` for both the socket connection and network requests. Store username in the token
* No error handling
  * Not a single `try/catch` in the codebase 😬
* No Testing 
  * On the front-end I would have used `cypress` for integration tests and mocha / chai for unit tests.
  * Back-end I would have used mocha / chai for both unit and integration tests.
* No environment variables / dev setup
  * More accurately, the whole thing is a dev setup. Would not be ready for an easy deploy to a test or prod environment.
* No CI/CD
* No plan for Database high availability, resilience, scalability, etc.
* Poor logging

## Installation / Usage

There are different installation / usage steps for the front-end vs the back-end.

* [Back-End Docs](./backend/README.md) (install / run this first)
* [Front-End Docs](./frontend/README.md)

## License
[MIT](https://choosealicense.com/licenses/mit/)