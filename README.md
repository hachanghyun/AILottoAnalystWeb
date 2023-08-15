## 1. Deployment URL
  https://github.com/hachanghyun/chatGptLotto
  
## 2. Summary

### 주요기능
#### (1). 백엔드 개발 OpenAi API 테스트
    기본적으로 node.js 설치후에 openai API 라이브러리 설치와 express 서버를 설치하고 
    open API 테스트를 진행하였습니다. chatGpt AI에게 번호예측 전문가라는 role을 정해주는 
    메세지와 사용자의 이름을 보여주고 응답데이터를 받는 형식으로 테스트를 진행하였습니다.
    이름을 입력을 안하면 이름을 제외하고 요청을 보내도록 설정하였습니다.
  <img width="862" alt="스크린샷 2023-08-15 오전 10 44 28" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/73066d01-a7e4-40b4-9311-14a684910d22">
<img width="1440" alt="스크린샷 2023-08-14 오전 10 37 52" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/9653b165-a891-48b1-b478-a359968cbde1">

#### (2). 프론트엔드 백엔드 연동 

    기본적인 프론트엔드 화면입니다. 컴포넌트는 상단배너, AI로봇배경, 이름 입력 컴포넌트, 요청 버튼으로 구성하였습니다.
![KakaoTalk_Photo_2023-08-15-07-58-53 001](https://github.com/hachanghyun/chatGptLotto/assets/33058284/5defe4bb-7a97-40e2-9955-443854b064fb)

    이름을 입력후 요청을 보내면 spinner 이벤트로 화면 disable 처리를 하였으면 응답이 오면 disable 처리를 해제하였습니다.
![KakaoTalk_Photo_2023-08-15-07-58-53 003](https://github.com/hachanghyun/chatGptLotto/assets/33058284/be7c98f2-b7dc-48ed-be68-03e89d6b034a)

    데이터를 setTimeout으로 0.1초 delay처리를 하여 타이핑효과를 주였습니다. 
![KakaoTalk_Photo_2023-08-15-07-58-53 004](https://github.com/hachanghyun/chatGptLotto/assets/33058284/ab8d6d48-a671-4427-bf5d-cfe85e9fd4cb)

    로또 번호 추천을 받고 다시하기 버튼으로 text변경후 요청을 다시 할수 있게끔 처리하였습니다.
![KakaoTalk_Photo_2023-08-15-07-58-53 005](https://github.com/hachanghyun/chatGptLotto/assets/33058284/683c8a91-36ab-424c-95a9-493f3df0b830)

    프론트엔드 파일(HTML,CSS,IMG)은 CLoudFlare Pages로 배포를 하였습니다. ZIP배포말고 폴더배포로 진행
    배포시 코드는 AWS Lambda 함수 URL정보로 변경후 배포해주었습니다. (local서버랑 구분)
![화면 캡처 2023-08-15 110157](https://github.com/hachanghyun/chatGptLotto/assets/33058284/7358c1aa-34c6-4559-b1c0-f4006a1ad22f)

    백엔드서버는 Serverless방식으로 AWS lambda함수에 배포를 하였으며 CORS 적용을 해주었습니다.
    처음에 이 CORS 적용때문에 하루를 통째로 날려먹었다는... 

    Access to fetch at ‘https://myhompage.com’ from origin ‘http://localhost:3000’ has been blocked by CORS policy: No ‘Access-Control-Allow-Origin’ header is present on the requested resource. If an opaque response serves your needs, set the request’s mode to ‘no-cors’ to fetch the resource with CORS disabled.
    위 에러가 주구장창 났었고 해결방법은 cors option값에 origin값을 넣고 요청을 보내면 Access-Control-Allow-Origin이 자동으로 헤더에 매핑된다고한다. 여기서 이 origin 값은 
    요청받는 프론트엔드 주소로 입력. 뒤에 '/'도 제거하고 입력하여야 한다 ( ex) 'https://myhompage.com' (o), 'https://myhompage.com/' (x) )
    그리고 AWS lambda 함수에서 ROOT 디렉토리에 다이렉트로 파일을 넣어주어야한다. 처음에 ZIP파일로 해서 backend 파일 경로에 들어가서 index.js 파일이 실행안됬던것같다.
    위 두가지 방법으로 cors 문제 해결했다. 
![화면 캡처 2023-08-15 110332](https://github.com/hachanghyun/chatGptLotto/assets/33058284/f424cbd5-9a6e-4cb7-ada3-d51b1e49702b)




## 3. Meaning

## 4. Technology Stack(s)

    Frontend : Javascript, HTML, CSS, Expo WebView, CloudFlare
    
    Backend : Node.js, OPENAI API, AWS lambda
    
    Database : X

## 5. Environment Setup

### (1). 기타 node 명령어

#### node 버젼확인 (14버젼으로 개발진행)
  <img width="494" alt="스크린샷 2023-08-14 오후 4 58 06" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/8ee2f476-869e-4bfe-84fe-1949295d2216">

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

##### 프론트엔드 배포 
    Cloud Flare Pages 에서 무료 배포 진행

##### 백엔드 배포
    serverless 방식으로 배포 진핼
    npm i serverless-http

### (2). webViewApp setting 명령어

#### expo-cli 전역으로 설치해주는 명령어
    npm install -g expo-cli 

#### expo 프로젝트 만들어주는 명령어
    expo init "프로젝트명"
    
#### expo 프로젝트 실행
    npm init
#### eas 세팅
    npm install -g eas-cli

#### log in expo accout
    eas login

#### configure the project
    eas build:configure

#### expo 프로젝트 실행
    npx expo start 
    npm start 

##### 웹뷰앱 개발을 위한 안드로이드 apk 시뮬레이터에 배포 명령어
     eas build -p android --profile preview
     
##### webview app 라이브러리 설치
    npx expo install react-native-webview

##### ios 배포진행
    eas submit --platform ios 
    
#### 빌드전 실행
    npm install -g eas-cli

#### IOS 빌드
    eas build -p ios

#### 안드로이드 빌드
    eas build -p android
    

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
    SYSTEM에서도 가스라이팅 먹이고 USER로도 똑같이 먹여야함.

### (3). 기타 앱 개발 참조 사이트

##### 프론트엔드 UI 참조 사이트
https://codepen.io/

##### node js 라이브러리 다운로드 사이트
https://www.npmjs.com/

##### node js express 서버 usage 사이트
  https://expressjs.com/ko/

##### 프론트엔드 배포사이트 (pages로 접속)
https://dash.cloudflare.com/

##### 백엔드 배포사이트 (lambda 함수 사용)
https://aws.amazon.com/ko/?nc2=h_lg

##### expo 빌드 참조 사이트
https://docs.expo.dev/build-reference/apk/

##### expo webview 예제확인
https://docs.expo.dev/versions/latest/sdk/webview/

##### APP ICON AI 생성사이트
https://labs.openai.com/

##### 카카오 앱 광고 사이트
https://adfit.kakao.com/info

##### 안드로이드 앱 배포 사이트
https://play.google.com/console

#### IOS 앱 배포 사이트 (맥북 safari로만 접속)
appstoreconnect.apple.com

#### 안드로이드 배포시 개인정보처리지침 가이드 블로그
https://soir1984.tistory.com/3

##### 영문주소 변환사이트
https://www.jusoen.com/

##### 안드로이드, IOS 배포관련 참조 강의
https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C/dashboard
