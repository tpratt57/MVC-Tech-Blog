const express = require('express');
const routes = require('./controllers');
const path = require('path');
const session = require('express-session');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const sequelzie = require('./config/connection');

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
        /* checkExpirationInterval: 20 * 60 * 1000,
        expiration: 24 * 60 * 60 * 1000 */
    })
};

app.use(session(sess));
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

//turn on connection to db and server

sequelzie.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});