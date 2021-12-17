# Getir Node.js Bootcamp | Week-3

This repo was created for homework of Getir Node.js Bootcamp week-3.

## API Endpoints

### Users

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /users/sign-up | `POST` | `{ email: "jone@doe.com", password: "pass1234", passwordConfirm: "pass1234" }` |  | Returns authentication bearer token and user data on body |
| /users/log-in | `POST` | `{ email: "jone@doe.com", password: "pass1234" }` |  | Returns authentication bearer token and user data on body |
| /users | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /users/:id | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /users | `POST` | `{ email: "jone@doe.com", password: "pass1234", passwordConfirm: "pass1234" }`  | Authentication: Bearer Token | Returns created resource or error message |`
| /users/:id | `PUT` | `{ email: "jone@doe.com", password: "pass1234", passwordConfirm: "pass1234" }` | Authentication: Bearer Token | Returns updated resource or error message |`
| /users/:id | `PATCH` | `{ email: "jone@doe.com", password: "pass1234", passwordConfirm: "pass1234" }` | Authentication: Bearer Token | Returns updated resource or error message |`
| /users/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |`

#### Notes

- If you perform a `POST` request to `/users/sign-up`, `/users/log-in`, and `/users`, you have to provide the exact same data as shown above on a request body.
- If you perform a `PUT` or `PATCH` request to `/users/:id`, you can provide one of the keys that is shown above, but be sure to provide `passwordConfirm` along with the `password` while trying to change `password`.

## Installation

Clone the source code:

    git clone git@github.com:getir-nodejs-bootcamp/week-3-assignment-kalender-toptas.git

Install dependencies:

    npm install

## Starting the app

Run `npm start` to start the application.
