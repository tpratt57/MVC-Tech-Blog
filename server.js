const express = require('express');
const routes = require('./controllers');
const sequelzie = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
const session = require('express-session');
const { Cookie } = require('express-session');
const exp = require('constants');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "Super Secret Secret",
    cookie: {},
    resave: false,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelzie,
        checkExpirationInterval: 20 * 60 * 1000,
        expiration: 24 * 60 * 60 * 1000
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

//turn on connection to db and server

sequelzie.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});