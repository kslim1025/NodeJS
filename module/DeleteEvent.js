//process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('onUncaughtException', function(error){
    //이벤트를 출력합니다.
    console.log("예외가 발생했습니다.");
    //이벤트를 제거합니다.
    process.removeListener('uncaughtException', onUncaughtException);
});

//process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException' , onUncaughtException);

//2초 간격으로 3번의 예외를 발생시킵니다.
var count = 0;
var test = function(){
    //탈출 코드
    count = count+1;
    if(count>3){
        return;
    }
    //예외 처리를 강제로 발생시킵니다.
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test, 2000);