const express = require("express");
const logger = require('morgan');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');

const app = express();
const PORT = process.env.PORT || 3000;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);

app.use(morgan('dev'));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const userRouter = require('./controllers/users.js');
app.use('/users', userRouter);

const airQualityRouter = require('./controllers/airQuality.js');
app.use('/city', airQualityRouter);

const commentsRouter = require('./controllers/comments.js');
app.post('/city/:country/:city', commentsRouter);

const citiesRouter = require('./controllers/cityList.js');
app.use('/country', citiesRouter);

const countriesRouter = require('./controllers/countryList.js');
app.use('/home', countriesRouter);


app.get('/', (req, res, next) => {
    res.redirect('/users/commentprofile');
})

app.use((err, req, res, next) => {
  console.log('Error encountered:', err);
  res.status(500);
  res.send(err);
});

app.listen(PORT, () => { console.log("Server started on " + PORT); });

