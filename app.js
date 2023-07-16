var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose')

// var mongooseOptions = { dbName: 'login-context'}
// mongoose.connect(process.env.MONGODB_URI, mongooseOptions )

mongoose.connect(process.env.MONGODB_URI, { dbName: 'redux-backend'} )
        .then(() => console.log('MongoDB Connected!!!'))
        .catch((error) => console.log(error))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users/users');
const productRouter = require('./routes/products');
const favoritesRouter = require('./routes/favorites');
const courseRouter = require('./routes/courses');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({
  origin: process.env.CORS_ORIGIN
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api/courses', courseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (req.originalUrl.startsWith('/api/')) {
    res.json({ error: err.message });
  } else {
  res.render('error');
  }
});

app.post('/api/products',(req, res, next) => {
  const product = req.body
});

app.post('/api/favorites',(req, res, next) => {
  const favorite = req.body 
});

app.post('/api/courses',(req, res, next) => {
  const course = req.body
});


module.exports = app;