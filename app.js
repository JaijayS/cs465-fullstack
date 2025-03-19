var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var roomsRouter = require('./app_server/routes/rooms') 
var mealsRouter = require('./app_server/routes/meals')
var newsRouter = require('./app_server/routes/news');
var aboutRouter = require('./app_server/routes/about') 
var contactRouter = require('./app_server/routes/contact')
var handlebars = require('hbs');

var app = express();
app.set('views', path.join(__dirname, 'app_server', 'views'));



// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars setup
handlebars.registerPartials(__dirname + '/app_server/views/partials');
app.set('view engine', 'hbs');

// Register routers
app.use('/', indexRouter);
console.log("Index router registered");

app.use('/users', usersRouter);
console.log("Users router registered");

app.use('/travel', travelRouter);  
console.log("Travel router registered");  

app.use('/rooms', roomsRouter);
console.log("Rooms router registered")

app.use('/meals', mealsRouter);
console.log("Meals router registered");

app.use('/news', newsRouter);  
console.log("News router registered");  

app.use('/about', aboutRouter);
console.log("About router registered")


app.use('/contact', contactRouter);  
console.log("Contact router registered");  


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
  res.render('error');
});

module.exports = app;
