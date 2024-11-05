Trading Platform

## Overview

Aurex is a trading and investment simulation platform developed with the [MERN](https://www.mongodb.com/mern-stack) stack and utilizing [Socket.io](https://socket.io/) for real time price updates. It is only a dummy portfolio project and does not represent real stock values or transactions. This idea for this project was inspired by [Jacky Tea](https://github.com/JackyTea), who created a similar application.

## Table of Contents

- [Stack](#stack)<br/>
- [Data](#data)<br/>
- [Development](#development)<br/>

## Stack

This project was developed with the MERN stack along with TypeScript, a GraphQL API, Socket.io and JWT for authentication.

**Front-End**

- React
- Redux
- TypeScript
- TailwindCSS, SASS
- Framer-Motion
- Apollo GraphQL Client
- ChartJS

**Back-End**

- Node.js
- Express.js
- TypeScript
- Mongoose
- Apollo GraphQL
- Socket<span/>.io
- JWT

**Database**

- MongoDB Atlas

## Data

The general stock data in this project was generated with [Mockaroo](https://www.mockaroo.com/) and filled in manually.

**Stock**

This project uses [JSON](https://www.json.org/json-en.html) to represent stock data in the form of:

```json
[
  {
    "_id": "ObjectId",
    "ticker": "String",
    "exchange": "String",
    "name": "String",
    "price": 0.00,
    "currency": "String",
    "ipo": "String",
    "country": "String",
    "logo": "URL",
    "weburl": "URL",
  }
]
```


## Development

To run this application locally, you will need the following prerequisite programs:

- [Node.JS and NPM](https://nodejs.org/en/)
- [Create React App](https://github.com/facebook/create-react-app)
- [MongoDB Atlas](https://www.mongodb.com/)

