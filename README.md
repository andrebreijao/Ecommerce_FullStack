# Ecommerce_FullStack

## Overview of the project
  This is full stack Ecommerce website deployed on Heroku using the following technologies:
  <div style="display:flex; width:100%; justify-content: space-evenly">
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      alt="react"
      width="40"
      height="40"
    />
    </a>
    <a href="https://redux.js.org" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
        alt="redux"
        width="40"
        height="40"
      />
    </a>
    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs"
        width="40"
        height="40"
      />
    </a>
    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        alt="mongodb"
        width="40"
        height="40"
      />
    </a>
  </div>
  
## Features
- Full featured shopping cart
- Product search feature
- User profile with orders
- Admin product management
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)
- Multiples shops allowed

## Usage
### ES Modules in Node
We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.
Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error
You can also install and setup Babel if you would like

### Env Variables
Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
### Install Dependencies (frontend & backend)
```
npm install
cd frontend
npm install
```
### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```
## Build & Deploy
```
# Create frontend prod build
cd frontend
npm run build
```
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku
### Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```
```
Sample User Logins
admin@example.com (Admin)
123456
john@example.com (Customer)
123456
jane@example.com (Customer)
123456
```
