//EventEmitter 객체를 생성합니다.
//var EventEmitter = require('events');
//var custom = new EventEmitter();
var EventEmitter = require('events');
exports.timer = new EventEmitter();

/*//이벤트를 연결합니다.
custom.on('tick', function (code){ console.log('이벤트를 실행합니다.')});

//이벤트를 강제로 발생시킵니다.
custom.emit('tick');*/

//이벤트를 강제로 발생시킵니다.
setInterval(function() {
    exports.timer.emit('tick');
}, 1000);