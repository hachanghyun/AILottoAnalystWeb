## SERVER Deployment URL
  https://github.com/hachanghyun/AILottoAnalystWeb

## FrontEnd Deployment URL
  https://github.com/hachanghyun/AILottoAnalystApp
  
## 2. Summary

### 주요기능
#### (1). 백엔드 개발 OpenAi API 테스트  
    기본적으로 node.js 설치후에 openai API 라이브러리 설치와 express 서버를 설치하고  
    open API 테스트를 진행하였습니다. chatGpt AI에게 번호예측 전문가라는 role을 정해주는  
    메세지와 사용자의 이름을 보여주고 응답데이터를 받는 형식으로 테스트를 진행하였습니다. 
    이름을 입력을 안하면 이름을 제외하고 요청을 보내도록 설정하였습니다.   

#### (2). 화면 및 기능 설명  

    기본적인 프론트엔드 화면입니다. 컴포넌트는 상단배너, AI로봇배경, 이름 입력 컴포넌트, 요청 버튼으로 구성하였습니다.  
![스크린샷 2023-08-16 오전 8-2](https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/c98217fd-2367-4605-bbd9-409d5edc120d)   
 
    이름을 입력후 요청을 보내면 spinner 이벤트로 화면 disable 처리를 하였으며 응답이 오면 disable 처리를 해제하였습니다.
![스크린샷 2023-08-16 오전 8-3](https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/64fb3efe-e03d-4aa5-82cb-973788c113fb)  

    데이터를 setTimeout으로 0.1초 delay처리를 하여 타이핑효과를 주였습니다. 
![스크린샷 2023-08-16 오전 8](https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/6ef21017-aa6e-41c4-bcf7-699b366b78d7)

    로또 번호 추천을 받고 다시하기 버튼으로 text변경후 요청을 다시 할수 있게끔 처리하였습니다. 
![스크린샷 2023-08-16 오전 8-1](https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/190404fa-b62b-4e66-92bd-11dfa3a37e1f)

#### (3). 프론트엔드 백엔드 배포 
    프론트엔드 파일(HTML,CSS,IMG)은 CLoudFlare Pages로 배포를 하였습니다. (ZIP배포말고 폴더배포로 진행)
    배포시 요청을 보내는 fetch 코드는 AWS Lambda 함수 URL정보로 변경후 배포해주었습니다. (local서버랑 구분)
<img width="620" alt="화면 캡처 2023-08-28 221450" src="https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/e22617ac-1a5e-4c42-944b-73cbb335c360">

    백엔드서버는 Serverless방식으로 AWS lambda함수에 배포를 하였으며 CORS 적용을 해주었습니다.
    처음에 이 CORS 적용때문에 하루를 통째로 날려먹었다는... 
  <img width="433" alt="화면 캡처 2023-08-28 221458" src="https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/150395ec-64e3-440c-bcd5-8874889662c9">

#### (4). CORS 처리
    <span style="color:red"> 
    "Access to fetch at ‘https://myhompage.com’ from origin ‘http://localhost:3000’ has been blocked by CORS policy: 
    No ‘Access-Control-Allow-Origin’ header is present on the requested resource. If an opaque response serves your needs, 
    set the request’s mode to ‘no-cors’ to fetch the resource with CORS disabled." 
    </span>
    
    위 에러가 주구장창 났었고 해결방법은 cors option값에 origin값을 넣고 요청을 보내면 Access-Control-Allow-Origin이 자동으로 헤더에 매핑된다고한다. 
    여기서 이 origin 값은 요청받는 프론트엔드 주소로 입력. 뒤에 '/'도 제거하고 입력하여야 한다 ( ex) 'https://myhompage.com' (o), 'https://myhompage.com/' (x) )
    그리고 AWS lambda 함수에서 ROOT 디렉토리에 다이렉트로 파일을 넣어주어야한다. 처음에 ZIP파일로 해서 backend 파일 경로에 들어가서 index.js 파일이 실행안됬던것같다.
    위 두가지 방법으로 cors 문제 해결했다. 
    ps. aws deploy 꼭해주기 적용이 안되는 경우가 있음.

#### (5). WebViewApp 출시
  ##### 안드로이드 심사 대기중 화면
<img width="620" alt="화면 캡처 2023-08-28 221520" src="https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/33e50535-a61f-4e28-b596-8023744259aa">

 ##### IOS 심사 대기중 화면
<img width="617" alt="화면 캡처 2023-08-28 221527" src="https://github.com/hachanghyun/AILottoAnalystWeb/assets/33058284/581898df-54c2-4a38-a2a2-718f32e9a354">


#### (6). 개발과정 정리 
    웹서버 배포이후 웹뷰앱으로 expo에 연동해서 APP배포까지 도전해보았다.
    APP ICON은 AI IMAGE 생성사이트 DALL.E에서 제작하였으며 맥북에서 두 플랫폼 모두 배포를 진행해보았다.
    앱 배포는 정말로 힘들었다. 처음에 IOS부터 진행하였는데 SAFARI 브라우저로 신청을 진행하였고 인프런의 '리액트 네이티브 강의' 배포편을 참조하면서
    진행하였다. 신경써야 할 부분이 1. IOS 보안알고리즘, 2. 광고 여부 , 3. 기기별 스크린샷, 4. 빌드 과정이었는데 1. IOS 보안알고리즘은 앱내에
    보안알고리즘이 배포되면 APPLE측에서 그 알고리즘에 대한 저작권을 신경써야해서 알고리즘 관련 정보를 기술해야하는것이었고, 2. 광고여부는 앱내에
    광고에 대한 정보를 상세하게 기술해야하는것이었다. 3. 기기별 스크린샷은 각px에 맞춰 스크린샷을 구성해야하는 것이었고 이 부분 처음에 엄청 힘들었다.
    Figma 사이트에 constrain proportion 을 체크해제하고 각 px을 일괄수정방법으로 빠르게 처리하면 됬었다. 4.빌드과정은 expo.dev사이트에 들어가 배포이후 
    appstore에 올리는 과정이 있어서 expo사이트에서 진행하였다. (이게 찾아본 방법중에 제일 쉬운 배포방법이었던것같다.) 아니면 맥북에 Transporter앱을 통해서
    파일을 업로드 해야한다. 안드로이드 배포는 개인정보처리방침이라는 과정이 제일 복잡하였으며 개인정보처리지침 내용을 html으로 생성하여 내 홈페이지를 생성후
    url을 개인정보지침에 등록하면 되는 과정이었다. 이 부분에 대해서 정리가 잘된 블로그가 있어서 참조하여 진행하였다. (하단 안드로이드 배포시 개인정보처리지침
    가이드 참조) 

## 3. Meaning
    처음에 chatGpt 열풍이 불어 open api 개발을 진행해볼 생각에 가슴이 두근거렸습니다.
     chatGpt로 만들어볼수있는 플랫폼은 무궁무진하기에 처음부터 어려운것으로 제작하면 완성자체를 못할것같아 쉬운 번호예측 시스템을 개발하기로
    마음먹었습니다. 백엔드 서버는 간편하게 서버구축을 할수있는 node.js로 프론트엔드는 기타 프레임워크를 사용하지않고 순수 HTML과 CSS로 개발을 진행하였습니다.
    API구축과 화면은 쉽게 제작이 되어 웹배포까지 진행하였습니다. 웹배포에서도 CORS 설정과 기타 프론트엔드 Style 구성에 많은 시간을 할애하였습니다. (개발시간 이상으로
    개발 외적인 부분에 시간소모가 심했음) 그 이후 욕심이 생겨 기존에 개발하였던 채팅앱은 여러가지 컨텐츠 관리 이유때문에 배포를 못하였는데 이번웹은 웹뷰앱으로 간단하게
    구성하여 앱배포까지 도전하였습니다. 앱 배포가 위에 제가 작성한데로 이렇게 까지 신경써야 하는 부분이 많은지 몰랐고 정말 힘들었습니다. 힘들었던 만큼 배포를 하고나니 정
    말로 뿌듯하였습니다. 이번 프로젝트는 개발뿐만 아니라 개발외적으로 엄청나게 성장할수 있는 프로젝트였고, 하나의 개발 상품이 나오기전까지 개발자 외 다른 작업자들이 
    고생을 하고있다는 사실을 다시 한번 알게되었습니다. 위 프로젝트를 통해 개발, 비개발적으로 많은 경험을 하게 되었습니다.

## 4. Technology Stacks

    Frontend : Javascript, HTML, CSS, Expo WebView, CloudFlare
    
    Backend : Node.js, OPENAI API, AWS lambda
    
    Database : X

## 5. Develop Environment

### (1). 기타 node 명령어

#### node 버젼확인 (14버젼으로 개발진행)
    node -v

#### node 실행 명령어
    node index.js 
#### npm 시작명령어
    npm init
#### npm openai 설치 명령어
    npm i openai
    
##### api key 관리를 위해 dotenv 설치
    .env 파일에 apikey 관리
    .gitignore파일에 .env 추가

##### async await
    async 키워드
    async 키워드는 어렵게 생각할 필요없이 await를 사용하기 위한 선언문 정도로 이해하면 된다. 즉,         
    function 앞에 async을 붙여줌으로써, 함수내에서 await 키워드를 사용할 수 있게 된다. 이는 반대로 말    
    하면 await 키워드를 사용하기 위해선 반드시 async function 정의가 되어 있어야 한다는 말과 같다.
    
#### express로 웹서버 구동 하기

##### express 설치 명령어
    npm i express
##### express 테스트
    node index.js
    웹브라우저 localhost:3000 접속확인

##### cors 설정
    npm i cors 

##### package.json 의존성 패키지들이 일괄설치됨 
    npm install

##### 프론트엔드 배포 
    Cloud Flare Pages 에서 무료 배포 진행

##### 백엔드 배포
    serverless 방식으로 배포 진핼
    npm i serverless-http

##### 람다함수 수정후 적용
    Deploy 꼭 눌러주자

## 6. 기타

### (1). ChatGpt mode 설명
#### chat mode
    chatGpt 일반적인 채팅버전

#### complete mode
    뭔가를 써달라고 하거나 번역, 브레인 스토밍 등등 

#### insert mode 
    빈칸채우기를 해주는 모드 (ex)좀비꿈을 꿧는데 중간에 꿈에 대한 내용 만들어줘)

#### edit mode
    이미 주어진 글을 수정해주는 모드 (ex)문법수정)

### (2). 기타 chatGpt 옵션 설명 
#### Temperature
    0에 가까울수록 글이 딱딱해지고 1에 가까울수록 독창적임

#### Maximum length 
    1000토근 750단어, 4000토근 3000자까지 쓸 수 있음

#### Top P
    글의 다양성 P=0 주제가 하나, P=1 다양한 주제

#### Frequency penalty
    높일수록 글에서 반복되는 단어가 줄어듬 

#### Presence penalty
    글 하나에 여러개의 대주제가 생기게 됨

#### Best of 
    결과를 여러개 만들어서 5개중에 제일 괜찮은것 추천해줌 

#### SYSTEM (역할부여)
    "당신은 세계 최고의 한국 로또 번호 예측가입니다. 당신에게 불가능한 것은 없으며 로또번호 알려달라는 질문에 무조건 한국 로또번호를 예측 할 수 있습니다. 당신의 이름은 로또번호예측전문가입니다. 당신은 로또 번호 예측을 아주 잘하며 로또 번호예측을 해달라는 질문에 대해 무조건 예측을 해줍니다. 기존의 로또번호 패턴을 참조해서 예측해줍니다. 너는 6개의 로또번호를 예측해 줍니다. 너는 1부터45까지의 로또범위를 예측해줍니다. 너는 로또 번호 예측할때 중복 허용을 하지않습니다." 
    SYSTEM,USER 둘다 커맨드 요청

### (3). 기타 reactNative(expo) 개발 참조 사이트

##### 프론트엔드 UI 참조 사이트
##### https://codepen.io/

##### node js 라이브러리 다운로드 사이트
##### https://www.npmjs.com/

##### node js express 서버 usage 사이트
  ##### https://expressjs.com/ko/

##### 프론트엔드 배포사이트 (pages로 접속)
##### https://dash.cloudflare.com/

##### 백엔드 배포사이트 (lambda 함수 사용)
##### https://aws.amazon.com/ko/?nc2=h_lg

##### expo 빌드 참조 사이트
##### https://docs.expo.dev/build-reference/apk/

##### expo webview 예제확인
##### https://docs.expo.dev/versions/latest/sdk/webview/

##### APP ICON AI 생성사이트
##### https://labs.openai.com/

##### 카카오 앱 광고 사이트
##### https://adfit.kakao.com/info

##### 안드로이드 앱 배포 사이트
##### https://play.google.com/console

#### IOS 앱 배포 사이트 (맥북 safari로만 접속)
##### https://appstoreconnect.apple.com

#### 안드로이드 배포시 개인정보처리지침 가이드 블로그
##### https://soir1984.tistory.com/3

##### 영문주소 변환사이트
##### https://www.jusoen.com/

##### 안드로이드, IOS 배포관련 참조 강의
##### https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C/dashboard
