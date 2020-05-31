var createError = require('http-errors');
//express 모듈을 추출합니다.
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//mysql 연동
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//내가 만든 모듈
var moduleA = require('./module/moduleA');
var process = require('./module/process');
var rint = require('./module/EmitterEvent');

//모듈을 추출합니다.
var url = require('url');
//쿼리 스트링을 문자열로 반환하기
var queryString = require('querystring');
//Crypto 암호화 라이브러리
var crypto = require('crypto');
//node의 기본적인 모듈을 모아놓은 라이브러리
var util = require('util');
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

var data = util.format('%d + %d = %d',25,252,25+252);
console.log(data);

//해시를 생성합니다.
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

//출력합니다.
console.log('crypto_hash: ', output);

//변수를 선언합니다.
var key = "아무도 알지 못하는 나만의 비밀 키";
var input = "PASSWORD";

//암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

//암호화해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

//출력합니다.
console.log('원래 문자열: ' + input);
console.log('암호화 : ' + cipheredOutput);
console.log('암호화 해제 : '+ decipheredOutput);

//모듈을 추출합니다.
var fs = require('fs');

//모듈을 사용합니다.
fs.readFile('C:\\Users\\ProDesk\\Desktop\\ultraedit250058_64\\123.txt', 'utf8', function(error, data){
    console.log(data);
});

var client = mysql.createConnection({
    user : 'root',
    password : 'test',
    database : 'mysql'
});

//데이터베이스 쿼리를 사용합니다.
client.query('USE mysql');

client.query('SELECT * FROM products',function(error, result, fields)
{
    //예외처리
    if(error){
        console.log('쿼리 문장에 오류가 있습니다.');
    }else{
        console.log(result);
    }
});

//mysql모듈을 사용해 데이터를 입력할 때는? 토큰을 사용할 수 있습니다.

//데이터베이스 쿼리를 실행합니다.
client.query('INSERT INTO products (name, modelnumber, series) VALUES (?,?,?)', ['Name Value','Model Number Value','Series Value'], function (error, results, fields) {
    
});


//이벤트를 연결합니다.
rint.timer.on('tick', function (code){
    console.log('이벤트를 실행합니다.');
});



module.exports = app;
