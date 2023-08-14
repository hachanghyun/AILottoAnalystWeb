## 1. Deployment URL
  https://github.com/hachanghyun/chatGpt1
  
## 2. Summary
### (1). ChatGpt mode 설명
#### chat mode
    chatGpt 일반적인 채팅버전

#### complete mode
    뭔가를 써달라고 하거나 번역, 브레인 스토밍 등등 

#### insert mode 
    빈칸채우기를 해주는 모드 (ex)좀비꿈을 꿧는데 중간에 꿈에 대한 내용 만들어줘)

#### edit mode
    이미 주어진 글을 수정해주는 모드 (ex)문법수정)

### (2). 기타 옵션 설명 
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

### (3). 기타 node 명령어
#### node 실행 명령어
    node index.js 
#### npm 시작명령어
    npm init
#### npm openai 설치 명령어
    npm i openai
#### npm usage로 샘플로 데이터 잘 가져오는지 확인 
<img width="678" alt="스크린샷 2023-08-13 오후 11 00 33" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/799700b4-a86f-478a-b742-0d8a0df5eb07">

#### express로 웹서버 구동 하기
##### express 설치 명령어
    npm i express
##### express 테스트
    node index.js
    웹브라우저 localhost:3000 접속확인
##### cors 설정
    npm i cors
    
##### api key 관리를 위해 dotenv 설치
    .env 파일에 apikey 관리
    .gitignore파일에 .env 추가
##### api get test
<img width="1440" alt="스크린샷 2023-08-14 오전 10 37 52" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/9653b165-a891-48b1-b478-a359968cbde1">

##### 프론트엔드 서버
    visual code extentions에서 Live Server 설치

##### 프론트엔드 UI 참조 사이트
    codepen

###### async await
    async 키워드
    async 키워드는 어렵게 생각할 필요없이 await를 사용하기 위한 선언문 정도로 이해하면 된다. 즉,         function 앞에 async을 붙여줌으로써, 함수내에서 await 키워드를 사용할 수 있게 된다. 이는 반대로 말    하면 await 키워드를 사용하기 위해선 반드시 async function 정의가 되어 있어야 한다는 말과 같다.

##### 프론트엔드 배포 
    Cloud Flare Pages 에서 무료 배포 진행

##### 백엔드 배포
    serverless 방식으로 배포 진핼
    npm i serverless-http
<img width="494" alt="스크린샷 2023-08-14 오후 4 58 06" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/8ee2f476-869e-4bfe-84fe-1949295d2216">

##### 웹뷰앱 개발을 위한 안드로이드 apk 시뮬레이터에 배포과정
  <img width="1113" alt="스크린샷 2023-08-14 오후 6 50 52" src="https://github.com/hachanghyun/chatGptLotto/assets/33058284/b833b813-010e-4dda-8cfc-522196f3678b">
  
    eas build -p android --profile preview
##### webview app 라이브러리 설치
    npx expo install react-native-webview

## 3. Meaning

## 4. Technology Stack(s)

## 5. Environment Setup

## 6. 기타
