//createConnection()메서드 ex

//모듈을 추출합니다
var mysql = require('mysql');

//데이터베이스와 연결합니다.
var client = mysql.createConnection({
    user : 'root',
password : 'test'
});
