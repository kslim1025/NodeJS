// 파일 읽기

//모듈을 추출합니다.
var fs = require('fs');

//모듈을 사용합니다.
fs.readFile('textfile.txt', 'utf8', function(error, data){
   console.log(data);
});

//파일쓰기

//모듈 추출합니다.
var fs = require('fs');

//변수 선언합니다.
var data = 'Helloworld...!';

//모듈을 사용합니다.
fs.writeFile('textfile.txt', data, 'utf8',function(error){
    console.log("Write File Async Complete");
});

fs.writeFileSync('textfile.txt',data, utf8);
console.log('WRITE FILE SYNC COMPLELTE');