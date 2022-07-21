//import express package (middleware for routes to respond to HTTP requests)
const express = require('express');
//import session package (necessary to save data during sessions)
const session = require('express-session');
//import handlebars (templating language used to generate html pages)
const exphbs = require('express-handlebars');
//importing path
const path = require('path')
//importing controllers
const routes = require('./controllers')


//setting app as the express method
const app = express()
//setting the port to localhost:3001
const PORT = process.env.PORT || 3001;

//importing connection configuration from config/connections.js
const sequelize = require('./config/connections')
//import connect-session-sequelize (necessary for creating timed sessions for logged in users)
const sequelizeStore = require('connect-session-sequelize')(session.Store);

//providing a cookie to store initialized sessions's information?
const sees = {
    secret: 'this is a secret',
    cookies: {},
    resave: false,
    saveUnitialized: true,
    store: new sequelizeStore({
        db:sequelize
    })
};

//using sees when calling a session?
app.use(session(sees));

//creating a new session?
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});