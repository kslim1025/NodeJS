//process.argv
exports.processA=function (item, index){
    //출력
    console.log(index + '   :  ' + typeof(item) + '  : ',item );
    //실행 매개변수 --exit있을때
    if(item == '--exit'){
        //다음 실행 매개변수얻는곳
        var exitTime = Number(process.argv[index +  1]);
        //일정 시간후 프로그램 종료
        setTime(function() {
            process.exit();
        },exitTime);
    }
};