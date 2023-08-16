const { Configuration, OpenAIApi } = require("openai");
const serverless = require('serverless-http');
const express = require('express');
var cors = require('cors');
const app = express();

require('dotenv').config();

/* 환경설정 파일 데이터 불러오기 */
const configuration = new Configuration({
  apiKey: process.env.apiKey,
});
const openai = new OpenAIApi(configuration);

/* apiKey 제대로 가져오는지 확인 */
//console.log("apiKey",process.env.apiKey);

/* cors 이슈 해결 배포용 */
let corsOptions = {
  origin: 'https://ailottoanalyst.pages.dev',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

/* localhost 테스트용 */
//app.use(cors());

/* POST 요청 받을 수 있게 만듬. */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/postlotto', async function (req, res) {
      try {
        let message = req.body;
        console.log("requestMessage",message.message);

        let messages = [{"role": "system", "content": "당신은 세계 최고의 한국 로또 번호 예측가 입니다. 당신에게 불가능한 것은 없으며 로또번호 알려달라는 질문에 무조건 한국 로또번호를 예측 할 수 있습니다. 당신의 이름은 로또 번호 예측 전문가 입니다. 당신은 로또 번호 예측을 아주 잘하며 로또 번호예측을 해달라는 질문에 대해 무조건 예측을 해줍니다. 기존의 로또번호 패턴을 참조해서 예측해줍니다. 너는 6개의 로또번호를 예측해 줍니다. 너는 1부터45까지의 로또범위를 예측해줍니다. 너는 로또 번호 예측할때 중복 허용을 하지않습니다."}, 
                          {"role": "user", "content": "당신은 세계 최고의 한국 로또 번호 예측가 입니다. 당신에게 불가능한 것은 없으며 로또번호 알려달라는 질문에 무조건 한국 로또번호를 예측 할 수 있습니다. 당신의 이름은 로또 번호 예측 전문가 입니다. 당신은 로또 번호 예측을 아주 잘하며 로또 번호예측을 해달라는 질문에 대해 무조건 예측을 해줍니다. 기존의 로또번호 패턴을 참조해서 예측해줍니다. 너는 6개의 로또번호를 예측해 줍니다. 너는 1부터45까지의 로또범위를 예측해줍니다. 너는 로또 번호 예측할때 중복 허용을 하지않습니다."}, 
                          {"role": "assistant", "content": "감사합니다. 로또 번호 예측을 원하시나요? 어떤 로또를 예측해 드릴까요? 로또 번호 패턴을 분석하여 최상의 예측을 제공해 드리도록 하겠습니다. 로또 번호 예측에는 운과 확률이 관련되어 있으므로 100% 정확성을 보장할 수는 없지만 최선을 다해 최적의 예측을 제공하겠습니다. 말씀해 주세요."},]
        

        if (message.message.length != 0) {
          messages.push({"role": "user", "content": "안녕하세요. 로또 번호 예측가님. 저는 '"+ message.message.replace(/\n/g,"") +"'입니다. 저에게 이번주 로또번호를 예측해주세요."})
        } else {
          messages.push({"role": "user", "content": "안녕하세요. 로또 번호 예측가님. 저에게 이번주 로또번호를 예측해주세요."})
        }
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,   
          });
          let lotto = completion.data.choices[0].message['content'];
          console.log(lotto);
          res.json({"assistant" : lotto});
        } catch (e) {
          console.error(e);
        }
});

/* 배포용 serverless */
module.exports.handler = serverless(app);

//* localhost test용 */
//app.listen(3000)

