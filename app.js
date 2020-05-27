var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//내가 만든 모듈
var moduleA = require('./moduleA');
var process = require('./process');

//모듈을 추출합니다.
var url = require('url');
//쿼리 스트링을 문자열로 반환하기
var queryString = require('querystring');
//모듈을 사용합니다.
var parseObject = url.parse('https://hanbit.co.kr/store/books/look.php?p_code=B4250257160');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

console.log('abs(-273) = %d ', moduleA.abs(-273));
console.log('circleArea(3) = %d', moduleA.circleArea());

console.log('process time = %d', process.processA(moduleA.abs(-273),0));

console.log(parseObject);
console.log(queryString.parse(parseObject.query));

module.exports = app;
