# NodeJS-Programming

 

NodeJS 연구계획서
2020년 1월 1일

작성자 : 최현일

회사 이름 : 프로보

개요
구글 크롬을 개발하는 과정에서 같이 개발된 V8이 오픈소스로 변환되면서 개발된게 Nodejs이다. 이는 서버 사이트 프로젝트를 만 들 수 있으며, 배치 처리 스크립트도 만들수있습니다. 이번 절에서는 Nodejs에 대해서 조금 더 자세히 알아보겠습니다.
Nodejs는  V8을 기반으로 개발 되었기 때문에 그 기대감이 더욱 크고, 성능적인면을 보장할 수 있기 떄문에 모두에게 사랑 받는 서버 사이드 언어로 자리잡았다.

초기설정

$ node app

$ npm install

$ npm install 모듈 --msvs_version=2019

장점

커피스크립트, 자바스크립트 모두 이언어로 개발이 가능합니다. 
자바스크립트 압축/최적화 도구인 uglify-js등을 모두 npm을 통해서 간단하게 설치 할 수 있습니다.
yarn또한 페이스북이 개발했고, 구글도 참여한걸로 알려져도 논란이었던 일관성있고, 안정적인걸로 알려져 있습니다.
비동기 서버를 사용하므로 자원의 낭비를 줄 일 수 있습니다.(Ajax와 같은 방법을 사용)
설명

개념설명

LTS버전: Long Term Support 30개월의 장기적인 지원 약속을 받은 버전
Current버전 :어떠한 변화가 일어나고 있는 현재 버전
REPL : Read Eval Print Loop 한줄씩 코드를 커멘드 라인처럼 실행해 볼 수 있는 환경
node 파일이름 : 파일 형태의 Node.js애플리케이션을 실행 하는 기본 명령어

npm을 통해 설치된 라이브러리는 node_modules라는 이름의 디렉터리가 생성돼어있고 그안에 설치된 모듈이 다운로드돼 있다는것 을 확인 할 수 있습니다. 단점은 모든 프로젝트 별로 필요한 라이브러리를 다운받아야한다는 점입니다.

그전에 프로젝트를 생성하기 위해서는 폴더를 생성하고, npm init를 통해 필요한 기본 문서들을 설치한다.

즉 package.json이 생성되고, 내부 라이브러리 및 속성이 설정된다.
npm install express -save
npm install ejs -save

   설치후 package.json 내용을 보면 의존성에 추가 되어 있는 것을 확인 할 수 있다. Express는 앱개발 프레임워크이고 ejs는 템플릿 엔진이다. 이것말고 pug(jade)라는 것도 있던데 … 이건 뭐 다시 새로운 문법을 배워야 한다. 된장. 지금도 머리 아파 죽겠는데 새로운 체계를 배우라고? 그래서 기존의 html 문법을 그대로 사용할수 있는 ejs를 사용하기로 했다. 

ex) file: src/ch1/request-downloadfile.js
//read modules
const fs = require('fs');
const request = require(request);

request('http://uta.pw/shodou/img/28/214.png').pipe(fs.createWriteStream('test.png'));

cmd or terminal
$ node request-downloadfile.js
위와 같이 작성하면 png파일을 다운되어 있는걸 볼 수 있다.
Java Lib를 사용할 수 있게 도와주는 툴
Rhino : https://developer.mozilla.org/ko/docs/Rhino
sudo yum install rhino
Nashorn : https://blogs.oracle.com/nashorn/welcome-to-the-nashorn-blog

npm 글로벌 설치 경로 확인

npm root -g
node -e “console.log(global.module.paths)”

Mac OSX에서 환경 변수 지정해주기

export NODE_PATH=/home/vagrant/.nvm/versions/node/v0.12.4/lib/node_modules
npm 매니저 설치
npm install -g n

npm 설치된 버전 알아보는 방법
npm list -g package_name
ex) npm list -g phantomjs@1.9.17
npm 캐시정리

npm cache clean -f

npm 최신버전 설치 방법

$ npm install -g npm@latest
$ npm -v

전역 라이브러리 설치 
모듈을 전역으로 설치해봅시다. 이는 머신 전체에서 공유할 수 있는 도구 또는 라이브러리를 설치 할 때 사용합니다. 설치한 모듈은 특정 디렉터리에 설치됩니다.

npm으로 전역 모듈을 설치할 때 어떤 디렉터리에 설치되는지 알고 싶다면 다음 명령어를 사용합니다.
npm root -g
/usr/local/lib/node_modules
예를 들어 커피스크립트를 설치 하고 싶다면 아래와 같이 선언한다.
npm install -g coffee-script

아주 드물게 전역으로 설치한 파일을 사용할 수 없는 경우가 발생합니다.이는 모듈의 디렉터리 경로가 제대로 잡혀있지 않기 때문입니다. 이 명령어는 다음과 같은 명령어로 확인할 수 있습니다.

npm root -g

MacOS/우분투의 경우 홈디렉터리에 있는 ~bashrc에 NODE_PATH환경 변수를 추가해줍니다.
명령어는 다음과 같습니다.

$ echo export NODE_PATH=$(node root -g) >> ~/.bashrc
$ soruce ~/.bashrc

윈도우의 경우는 그냥 환경변수에 그 디렉터리를 추가해주면됩니다.

--save-dev [모듈이름]`으로 설치하는 이유


`$npm install --save-dev [모듈이름]`으로 설치하는것은 모듈을 설치할 때 package.json 내의 devDependencies 항목에 설치한 모듈과 버전을 넣는 것을 뜻합니다. dev로 시작되는 이름에서 볼 수 있듯이 개발용으로 쓸 경우 devDependencies에 기록합니다. 
가령 이런 경우겠죠. 제품의 릴리즈나 구동시 꼭 필요한 모듈의 경우 --save 옵션으로 dependencies 항목에 기록하고
제품의 개발시에 테스트를 위해서 필요한 모듈이긴 한데 실제 릴리즈시에는 필요없는 모듈의 경우 --save-dev로 devDependencies 항목에 넣는게 맞겠네요.
  마지막으로 이렇게 기록된 모듈 항목들을 설치할 때는 어떻게 쓸까요? 그냥 `$npm install'이라 하면 될까요?
`$npm install'이라고 쓰면 dependencies, devDependencies 모든 모듈을 설치합니다.
dependencies만 설치하려면 `$npm install --only=prod[uction]`
devDependencies만 설치하려면 `$npm install --only=dev[elopment]` 로 씁니다.

머신러닝 라이브러리 설치 
npm install -g --save-dev node-svm
npm install -g --save-dev opencv4nodejs
모듈 제거 방법
npm uninstall request

NPM을 이용한 프로젝트 생성방법
#디렉터리르 생성합니다.
mkdir project_a
cd project_a

#npm으로 프로젝트를 생성합니다.
npm init
이를 실행하면 이름 버전 설명등을 물어보는데 적당히 적어주면됩니다.
그러면 package.json이 생성됩니다.
이는 프로젝트를 관리하기 위한 파일입니다.

package.json을 사용하여 모듈 설치 기록하기
프로젝트에서 사용할 라이브러리를 npm으로 설치할때 “--save” 또는“ --S”옵션을 붙여서 살치하면 package.json에 의존 모듈로써 설치한 모듈과 버전이 기록됩니다.

node를 이용해서 실행하는 방법 외에도 npm run start를 통해 스크립트를 실행하는 방법이 있습니다.
package.json에 여러가지 명령어를 등록하기
package.json의 scripts 속성에 명령어를 등록해봅시다. 다음과 같이 scripts내부에 build, start라는 요소를 추가합니다. 이렇게 하면 간단한 명령어를 입력으로 빌드하고 실행할 수 있게됩니다.
{
  “name”:”babeltest”,
….(생략)....
  “scripts” :{
	“build” : “babel bmi.js -o bmi.out.js”
	“start” : “node bmi.out.js”
 },
 ….(생략)....
}

#바벨로 변환하기
npm run build
#프로그램 시작하기
npm run start
npm run check를 사용해서 설치된 라이브러리의 버전을 체크할 수 있습니다.

Yarn을 쉽게 설치하는 방법
npm install yarn -g

Yarn으로 모듈을 설치할 떄는 “yarn add”명령어를 사용합니다. 예를 들어 커피스크립트를 설치해봅시다.
yarn add coffee-script

전역으로 설치하는 방법
yarn global add coffee-script


사용되는 IDE
1.Editplus등의 텍스트 에디터를 사용하는 경우도 있을 것입니다.
2.Atom
3.Visual Code
4. JSFiddle(온라인 에디터)
5. 인텔리제이
6. 이클립스

JSLint, JSHint, ESLint등의 도구를 사용
코딩 규약및 들여쓰기를 사용할지 말지 등을 확인하는 도구

자동으로 스타일을 변환해주는 명령어

#프로젝트에 스타일을 적용할 경우
$ npm install standard --save-dev
# 전역 도구로 사용할 경우
$ npm install standard --global
이어서 변환하고 싶은 프로젝트의 디렉터리에서 명령어를 다음과 같이 입력하면 js표준 스타일에 맞지 않는 부분이 출력됩니다
$ standard

그리고 자동으로 이 문제를 해결하고 싶을떄는 다음과 같은 명령어를 입력합니다.
standard --fix

아톰 에디터에서 실시간으로 확인하기
apm install linter
apm install inter-js-standard
바벨이란?
자바스크립트 표준 규격은 차근차근 제정되어왔고, 이러한 규격에는 개별 효율을 훨씬 높여주는 다양한 구문들이 있습니다. 하지만 그러한 것들을 사용하고 싶어도 제안된 것들을 실제 웹브라우저에서 사용할 수 있게 되기까지는 시간이 걸립니다. 또한 웹브라우저에 추가되더라도 테스트를 마치고 공식적인 발표가 있을때 까지는 많은 시간이 걸립니다. 게다가 해당 버전을 사용자에게 보급될때까지는 더 많은 시간을 요구합니다. 그래서 등장한 것이 바벨입니다. 바벨은 자바스크립트를 위한 다목적 컴파일러입니다. 바벨을 사용하면 다음세대의 자바스크립트로 작성된 코드를 현재 일반적으로 사용되는 자바스크립트로 변환 할 수 있습니다. 따라서 최신 표준의 소스코드를 이전 표준의 코드로 변환해주는 도구라고 할 ㅜ있습니다. 이러한 것을 “트랜스파일러”라고 합니다.
바벨 설치
npm install --global babel-cli babel-preset-es2015
바벨 전용 설정 파일 만들기
npm init으로 프로젝트를 초기화합니다.
	mkdir babeltest
	cd babeltest
	npm init -y
필요한 라이브러리를 설치합니다.
	npm install --save-dev babel-cli
	npm install --save-dev babel-preset-es2015
바벨 설정 파일인.babelrc를 만듭니다.
file: src/ch1/babeltest/.babelrc
다음과 같이 입력하기
{“presets”:[”es2015”]}
babel 명령어로 JS파일을 변환합니다.
	babel bmi.js -o bmi.out.js
변환된 프로그램 실행하기
	node bmi.out.js

바벨로 일괄 변환
예를들어 src 디렉터리에 ES2015로 작성한 프로그램인 a.js b.js가 있다고 치면, 그 변환결과를 dest디렉터리에 저장해보겠습니다.
babel src -d dest
명령어를 사용하면 명령어를 실행하면 어떤 파일을 변환 했는지 등도 함께 출력됩니다.

프로그램 코드를 간결하게 만드는 방법
babel src --compact = true -d dest
프로그램을 변환할 떄는 주석과 쓸데없는 공백으 제거해서 프로그램코드를 간결하게 만들 수 있습니다. 이떄는 “--compact=true”를 사용합니다.

하지만 변환을 하게되면 디버깅시에 발생하는 문제의 위치점 찾기가 힘들어집니다.
그래서 이를 변환전과 비교하여 빠르게 틀린 위치를 찾아주게 하는 방법이 소스맵을 출력할 때 다음과 같이 “--source-maps”옵션을 붙입니다.
$ babel bmi.js -o bmi.out.js --source-maps
이를 이용하여 bmi.out.js를 실행하면 변환전의 소스를 크롬 개발자 모드에서 확인할 수 있습니다.

원래 자바스크립트는 웹브라우저에서 실행되므로 언어 사양적으로 외부 모듈을 읽어 들이는 기능이 존재하지 않습니다. 그래서 Node.js는 CommonJs 사양을 기반으로 모듈 기능을 추가했습니다.
CommonJS란 자바스크립트 서버 사이트 또는 명령줄 도구를 개발하기 위해 만들어진 자바스크립트 표전 API사양 정의입니다.

이기능이 require입니다.

const calculator = require(‘./caculator_modules.js’)라는 형태로 맨 상단에 위치합니다.
ES2015로 넘어오면서 import 와 export기능이 추가되었습니다.
이는 바벨에서만 지원되고 nodejs에서는 지원되지 않기 때문에 다음과 같이 준비합니다.

export를 입력하고 작성하면 외부로 공개를 하고
import를 입력하고 작성하면 그 명령어를 입력하는 것입니다.

사용방법은 다음과 같습니다
import {add, mul } from ‘./calculatest.js’;

모든 명령어를 읽어들일때
 import * as ct from ‘./calculatest.js’;
이 경우에는 ct를 앞에 붙이고 메소드를 읽어옵니다 예를 들어 cd.add()이런 형태로 입력됩니다.

다음은 export입니다.
예) function gobsem(a,b){
    return a*b;
}

//gobsem을 기본적으로 공개합니다.
export default gobsem;

읽어 들일때는
import gobsem from ‘./gobsem’;


팩키지 설치 명령어
npm install request 
여기에 텍스트를 입력하세요 여기에 텍스트를 입력하세요 여기에 텍스트를 입력하세요 여기에 텍스트를 입력하세요 여기에 텍스트를 입력하세요.
감시모드 --watch 
--watch , -w 를 이용하여 간단한 감시 모드를 실행 할 수 있습니다.
이는 프로그램이 작성될때마다 곧 바로 변환해주는 기능입니다.


{
  "name":"babeltest",
....(생략)....
  "scripts" :{
	"build" : "babel bmi.js -o bmi.out.js"
	"watch" : "babel bmi.js -w -o bmi.out.js"
	"start" : "node bmi.out.js"
 },
 ....(생략)....
}
$프로그램 개발을 시작합니다.
$ npm run watch



비동기 처리
동기 처리
설명
fs.readFile()
fs.readFileSync()
파일을 읽습니다.
fs.writeFile()
fs.writeFileSync()
파일을 씁니다.
fs.readdir()
fs.readdirSync()
특정한 디렉터리 내부의 디렉터리와 파일 목록을 추출합니다.
zlib.gzip()
zlib.gzipSync()
압축합니다.
crypto.pbkdf2()
crppto.pbkdf2Sync()
암호화합니다.

베이즈지안 필터 라이브러리 설치
npm install --global --save-dev bayes 

예제) 장영실과 이순실을 판별해보자.
src/ch07/02-bayes/simple-bayes.js

//간단한 문장 분류 for Node.js
//모듈 로드
var bayes = require('bayes');
var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();

//샘플 텍스트
var t_jang= '장영실은 조선 전기의 관려이며 과학자, 기술자, 발명가이다. 경상남도 동래군 출생, 본관은 아산, 시조 장서의 9대손으로 추정된다. 장영실은 동래현 관청에서 일하는 노비가 되었으며, 발명가인 장영실의 훌령한 재주를 태종이 인정하여 발탁하였다.. 생략';
var t_lee ='이순신은 조선 중기의 무신앋. 본관은 덕수, 지는 여해, 시호는 충무이며, 한성 출신이다. 문반 가문 출신으로 1576년 무과에 급제하여 그 관직이 동구비보 권관, 훈련원 봉사, 발포진 수군 민호, 조산보 만호, 전라좌도 수군 절도사를 거쳐 정헌대부 삼도수군 통제사에 이르렀다....생략  ';



//텍스트를 분할 방법을 설정
var classfisier =bayes({
	tokenizer: function (text) {return mecab.parse(text);}
});

//텍스트 학습
classifier.learn(t_jang, '장영실');
classifier.learn(t_lee, '이순신');

//카테고리 판정
categorize('임진왜란의 장군으로 조선의 무신');
categorize('조선 최고의 과학자');
categorize('자격루를 만든 사람');

//카테고리 분류 결과 출력
function categorize(text){
  var r = classifier.categorize(text);
  console.log("카테고리 = [" +  r  + "] - " + text);
}


Naivebayes.protoype.learn = function(text, category) {
	//처음으로 나타나는 카테고리이면 해당 카테고리에 대한 자료 구조를 초기화한다.
self.initializeCategory(category)
//해당 카테고리의 문서를 몇 개 학습했는지 기록
self.docCount[category]++
//총 학습한 문서의 수를 기록
self.totalDocuments++
//텍스트를 단어의 배열로 분할한다.
var tokens = self.tokenizer(text);
...
}

단순 이동 평균 (SMA, Simple Moving Average)
단순 이동 평균은 시계열 데이터의 추세를 구하는 방법이다. 최근 n개의 데이터에 대한 단순 평균을 취하는 방법으로 금융이나 기상과 같은 계축 분야에서 사용되고 있다.

이는 수요 에측에 관해서 사용 할 수 있고, 비즈니스에서는 재고 및 생산관리를 효율적으로 하기 위해 수요를 예측한다. 즉, 수요 예측은 실제 업무에 도움이 되는 노하우다. 계산도 그다지 어렵지 않으므로 한번 이해해면 다양한 분야에 활용 가능하다.

예를 들어, 정기적으로 영어 시험을 치르는데 오늘은 60점, 지난번에는 46점, 그전에는 53점이었다고 하자 그러면 평균 점수는 53와 같이 구할 수 있다.

최근 n개의 데이터를 각각 Pm,Pm-1, Pm-2,Pm-3...Pm-n으로 나타내면 다음과같다.

SMAm =  Pm +Pm-1 + Pm-2 + Pm-3...Pm-nn

그러나 예를 들어 100개의 데이터의 평균을 구하여 1개의 값으로 바꾸면 데이터가 증가 경향을 가지는지 감소 경향을 가지는지는 알수 없게된다. 평균은 어디까지나 평균이며 중요한 정보를 상실할 수 밖에 없다. 단순 이동평균이란 그래프를 그렸을때 들쭉날쭉한 데이텉 매끄럽게 만들어주는 방법이라 할 수 있다.

지수 평활법(지수 이동 평균법, EMA, Exponential Moving Average)은 이동 평균법과 함께 널리 사용되는 분석 방법이다. 과거 데이터 중 현재에 가까운 데이터에 보다 큰 비중을 주고 과거로 갈 수 록 웨이트가 적어지게(지수 함수적으로 감소.) 하는 방법이다.

지수 평활법

이동 평균법에 비해 현재의 상태가 직전의 상태에 강한 영향을 받거나 상태의 변동에 가급적 추종하고 싶은 경우에 사용되며, 단기적인 예측에 적합하다. 재무상의 시계열 예측이나 주가변동 분석등에 사용된다. 지수 평활법은 다음식을 따른다. 여기서 a의 값은 0<a<1로 한다.

예측값 = a x 전회 실적치 + (1-a) x 전회 예측치
= 전회 예측치 +a +(전회 실적치 - 전회 예측치)
전회 실적 값과 예측값의 차이에 일정한 계수 a를 곱해서 생긴 수정치를 이전 예측치에 가감함으로써 이번 전망치를 산출한다.

서포트 벡터 머신(SVM : support, Vector machine)
    우리 인간의 학습 능력은 무한하다. 오감을 활용하여 다양한 상황을 인식하고 학습할 수 있다. 그에 비해 컴퓨터의 학습능력은 매우 제한적이다. 인간이 프로그램을 통해 데이터나 식을 제공해 줘야 지시한 대로 처리를 할 수 있을 뿐이다.

그래서 컴퓨터가 인간과 같은 학습 능력을 가지게 하기 위한 연구가 이루어 졌다. 그 성과중 하나가 다층 퍼셉트론이다. 이는 1980년 개발되어 다양한 분야에 응용되어 왔으나, 여러가지 한계점이 제기 되었다.

이를 해결하는 과정에서 나온것이 서포트 벡터 머신(support, Vector machine)이다. SVM은 1995년에 제안된 패턴 인식 기법의 하나로 통계적인 머신러닝 방법이다. SVM은 패턴 인식 능력이 매우 우수한데 마진을 최대로 만드는 알고리즘을 통해 초평면을 결정한다.

사용 예제:
패턴 인식이라는 문제에 관해 생각해 보자. 예를 들어 A와 B두 종류의 패턴이 있다면 임의의 패턴을 어느 패턴으로 인식할지 결정하는 것이 패턴 인식의 목표이다. 그래서 A와B의 출현 장소를 조사하여 분류의 기준이 되는 경계를 정한다. 이러한 패턴사이의 경계를 ‘초평면’  이라고 한다. 그리고 올바른 경계를 정할 수 있다면 새로운 미지의 요소가 나타났을때 A와 B 중 어느 패턴으로 분류해야 할지를 결정할 수 있게된다.

구체적인 그래프를 보면 보다 이해하기 쉽다. 그래프에는 동그라미와 네모 두 종류의 데이터가 있다. 그리고 다음 그림과 같이 이 두종류의 데이터를 나누기 위한 경계선은 여러가지가 있을 수 있다.

많은 경계선중 가장 좋은 것은 상식적으로 생각해도 동그라미와 네모의 딱 중간을 지나는 선이 될것이다. 이 가운데 지나는 선을 결정할 떄 다음과 같이 초평면으로부터 가장 가까운 기존패턴과 거리(마진)가 최대가 되도록 결정되는 것이 최선의 선택이다. 이게 SVM마진 최대화 알고리즘이다.

챗봇 만들기
대화 구조:
사용자가 입력한 문장을 얻는다.
문장을 형태소 분석한다.
각 형태소에 대해서 데이터베이스의 대화 사전을 검색한다.
만일 일치하는 것이 있으면 그 대답을 반환한다.


Opencv4nodejs 설치방법 

설치할때 무조건 cmake랑 visual studio 작업이 진행되어 있어야됨
참고: https://www.youtube.com/watch?reload=9&v=0hZoN4m7hP8

npm package:
 
https://www.npmjs.com/package/opencv4nodejs
 
1. Download cmake for windows
 
https://cmake.org/download/
 
2.  Installing visual studio 2017 and C++ development tools
 
https://visualstudio.microsoft.com/downloads/
 
3.Install windows building tool (python 2.7 ,etc.)
 
npm install --global windows-build-tools
 
4. install opencv4nodejs
 
npm install --save opencv4nodejs
 

Node-SVM 설치

한 행당 하나의 이미지를 담고 있는 csv파일이 준비 되었으니 svm에 이미지를 학습시킬 준비가 되었다. 먼저 Node.js의 node-svm 모듈을 설치하도록한다. node-svm 모듈은 C++로 SVM을 구현한 libsvm을 Node.js의 모듈로 만든 것이다. -g 옵션을 붙여서 설치하면 Node.js에서 사용할 수 있는 모듈과 더불어 커멘드 라인에서 사용할 수 있는 도구도 설치된다.

npm install --global --save-dev svm

진행순서는 다음과 같다.
node-svm을 깔고
이미지 데이터를 다운받고
이미지 데이터를 csv파일로 변환시킨다.
csv를 다시한번 svm파일로 변환시키고
이를  svm 파일로 학습 모델을 만들어주면된다.

학습용 데이터 파일 만들기
SVM에 이미지를 학습시키기 위해서는 SVM용 학습 파일을 만들어야한다. 이 SVM파일은 CSV파일을 토대로 작성할 건데 그전에 먼저 SVM 파일이 어떤 형식인지 소개하겠다. SVM 파일은 한 행에 하나의 이미지 데이터를 담는다.


[서식] svm파일
<label> <index1>:<value1> <index2>:<value2> <index3>:<value3> <index4>:<value4>..
<label> <index1>:<value1> <index2>:<value2> <index3>:<value3> <index4>:<value4>..
<label> <index1>:<value1> <index2>:<value2> <index3>:<value3> <index4>:<value4>..

이처럼 학습 데이터인 SVM파일은 하나의 행에 하나의 이미지 데이터를 배치하는 점에서CSV파일과 크게 다르지는 않지만 index:value중 value가 0인 경우에는 생략할 수 있다.

그래서 보통 CSV파일을 SVM 파일로 변환 시킨다.

ex) csv2trainfile.js

SVM파일을 학습시켜 모델 생성
학습 데이터로 사용할 수 있는 SVM파일을 준비하였으니 이제 모델을 만들어보자 node-svm 모듈을 사용하는 Node.js 프로그램을 만들어 학습시킬 수 도 있다. 그러나 node-svm을 설치할떄 -g 옵션을 주었으면 커맨드 라인에서 바로 node-svm을 사용 할 수 있다.

node-svm 학습 모델 만들기
node-svm train (입력 svm 파일) (출력 model 파일)

그러면 실제 사용해보자. 다음은 train-mini.svm이라는 파일을 학습데이터에서 학습 모델로 train-mini.model을 생성하는 명령이다.

node-svm train train-mini.svm train-mini.model

그러면 어떤 파라미터로 데이터를 학습시킬지 부터 질문이 표시된다. 여기서는 모두 기본값을 사용한다.

정답률 확인하기
node-svm evaluate train-mini.model t10k.svm

실행하면 결과를 잘 살펴보면  정확도 Accuracy 75.92 같은 표시가 나온다.
이것 저것 보고 이제 전체 학습 데이터로 모델을 만들어보자

node-svm train train.svm train.model

메모리가 부족한 경우에는 node-svm의 원조격인 libsvm을 사용해서 하면된다.



NodeJs를 사용한 스크래핑 

스크래핑이란?
웹의 세계에서 흔히 말하는 스크래핑은 웹사이트에서 HTML데이터를 수집하고, 특정 데이터를 추출, 가공하여 저장하는 것을 말한다. 단순히 웹사이트에서 HTML을 다운로드 하는게 아닌 그들의 각 요소를 분석하는 과정을 의미한다.

라이브러리:
Cheerio-httpcli 모듈 설치
npm install cheerio-httpcli

로그인이 필요한 웹페이지 크롤링하기

PhantomJS와 CasperJS에 관하여
여러 페이지를 이동하거나 로그인 후 데이터를 취득할 때는 전용 도구를 이용하는 것이 가장 좋다. PhantomJS와 CasperJS는 폼에 값을 설정하거나 특정 버튼을 클릭하는 것과 같은 웹브라우저의 I 자동화 작업을 지원하는 강력한 도구이다.

PhantomJS
커멘드 라인에서 쓸 수 있는 웹브라우저이다. 렌더링 엔진으로 웹킷이 채용되었다. 구글도 원래는 웹킷을 사용했지만 블링크(Blink)로 이동했고, Blink도 원래는 웹킷을 기반으로 파생된 상품이다.
CasperJS
CasperJS는 PhantomJS를 보다 쉽게 사용하기 위한 라이브러리다. 그러므로 CasperJS를 사용하기 위해선 PhantomJS가 설치되어있어야한다.

설치방법:

Centos에서는 아래의 명령어를 먼저 실행하고 진행하도록 한다.

sudo yum install freetype
sudo yum install frontconfig

#PhantomJS 설치방법
npm install --global phantomjs
#CasperJS 설치방법
npm install --global casperjs


CasperJS로 로그인이 필요한 홈페이지 크롤링하기

크롬 개발자 모드를 키고 
form 태그의 ID 는 authForm
아이디 입력창의 name은 loginId
비밀번호 입력창의 name 은 password

CasperJs는 form 태그에서 값 입력을 하여 전송 할 수 있는 인터페이스가 존재한다.

Casper.fill(CSS 선택자, 값 객체, [, Submit 여부])

CSS선택자 : Form의 CSS 선택자
값 객체: name과 value 속성을 지정
Submit  여부: true의 경우, 전송까지 수행

src/ch03/02-login/login.js
var casper = require('casper').create({verbose: true, logLevel: "debug"});

//URL 및 로그인 정보 변수
var url  = "http://본인 블로그 주소/admin/center/";
var id    = "kslim1025";
var password = "";

casper.start();
casper.open(url);

//Form Submit
casper.then(function(){
  casper.fill("#authForm",
{
   loginId: id;
   password : password
}, true);
});

//로그인 후 수행
casper.then(function(){
	var getComment = function(){
	//페이지 내의 document 객체 사용
	return document.querySelector("#blogInfo > ul > li:nth-child(3) > span.day").innerText;};
console.log("새 댓글 수  : " + this.evaluate(getComment)); //evaluate() 메소드
casper.then(function(){
	var getGuestBook = function(){
		return document.querySelector("#blogInfo > url > li:nth-child(4) > span.day ").innerText;
};
console.log("새 방명록 수 : " + this.evaluate(getGuestBook));

});
casper.run();
한글 형태소 분석기
mecab-ko라는 형태소 분석기를 사용하여 한글 문장 분석 가능.
(현재는 리눅스만 지원됨)
MeCab는 일본어 형태소 분석기


한나눔               :     http://kldp.net/project/hannanum
꼬꼬마 형태소 분석기    : http://kkma.snu.ac.kr
루씬 한글 분석기(아리랑) : http://cafe.naver.com/korlucene
KoNLpy 분석기 : Korean NLP in Python : http://konlpy.org
KLT 분석기 : Korean Language Technology   : http://nlp.kookmin.ac.kr/HAM/kor/
초고속 한국어 형태로 분석기 MACH   :   http://cs.sungshin.ac.kr/~shim/demo/mach.html
KOMORAN 2.0 - 자바 기반의 한국 형태소 분석기 : http://www.shineware.co.kr/?page_id=835

기본명령어

개념
설명
전역 변수/ 객체
프로그램 전체에서 사용할 수 있는 변수와 객체
Process 객체
프로그램과 관련된 정보를 나타내며, 웹 브라우저에서 동작하는 자바스크립트에 존재하지 않는 Node.js 만이 가진 객체
모듈
모듈은 기능을 쉽게 사용하고자 메서드와 속성을 미리 정의해 모아 놓은 것
exports객체
모듈을 생성할때 사용

전역변수

변수 이름
설명
__filename
현재 실행중인 코드의 파일 경로
__dirname
현재 실행중인 코드의 폴더 경로

전역 객체

객체이름
설명
console
콘솔 화면과 관련된 기능
exports
모듈과 관련된 기능
process
프로그램과 관련된 기능

Console 객체

메서드 이름
설명
log()
로그를 출력합니다
time()
시간 측정 시작
timeEnd()
시간 측정 종료

특수 문자

특수문자
설명
%d
숫자
%s
문자열
%j
JSON
ex) console.log(‘output: %d’, 273);

Process 객체의 속성

속성이름
설명
argv
실행 매개변수
env
컴퓨터 환경과 관련된 정보
version
Node 버전
versions
Node 종속 프로그램 버전
arch
프로세서의 아키텍처
platform
플랫폼

Process 객체의 메서드

메서드 이름
설명
exit([exitCode = 0])
프로그램 종료
memoryUsage()
메모리사용 정보 객체 리턴
uptime()
현재 프로그램이 실행된 시간




참고

[1] 노드공식 사이트 : https//nodejs.org/ko

[2] 노드 공식 사이트 가이드 : http://nodejs.org/en/docs/guides/

[3] 이벤트 루프에 대한 시각적 설명 : http://latentflip.com/loupe

[4] 이벤트 루프에 대한 설명: https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/

[5] VS Code 공식 사이트 : https://code.visualstudio.com

[6] 자바스크립트 표준 스타일 : https://standardjs.com

[7] 바벨 설치 : https://babeljs.io

[8] cmake 설치 홈페이지: https://cmake.org/download/

[9] CasperJS : http://casperjs.org/

[10] Nodejs 버전 :  https://github.com/kslim1025/Release
