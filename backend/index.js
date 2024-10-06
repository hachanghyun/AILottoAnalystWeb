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
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
//app.use(cors(corsOptions));

/* localhost 테스트용 */
app.use(cors());

/* POST 요청 받을 수 있게 만듬. */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/api/topics/send', async function (req, res) {
      try {
        let message = req.body;
        console.log("requestMessage",message.message);

        let messages = [{"role": "system", "content": "안녕 너는 세계적인 AWS 아키텍처 전문가야. 너는 AWS 서비스 설명만 해주는 역할이고 그 외에 말은 하지마."}, 
                          {"role": "user", "content": "안녕 너는 세계적인 AWS 아키텍처 전문가야. 나에게 AWS 서비스에 관해서 자세히 알려줘. 너는 AWS 서비스 설명만 해주는 역할이고 그 외에 말은 하지마."}, 
                          {"role": "assistant", "content": "감사합니다. AWS 서비스에 대해 궁금하신 사항이 있으신가요? 어떤 AWS 서비스를 알려드릴까요? 네. AWS 서비스 설명만 해드리고 , 그 이외의 말은 하지 않겠습니다."},]
        
                          messages.push({"role": "user", "content": message.message})
        // if (message.message.length != 0) {
           messages.push({"role": "user", "content": "'"+ message.message.replace(/\n/g,"") +"'"})
        // } else {
        //   messages.push({"role": "user", "content": "안녕하세요. 로또 번호 예측가님. 저에게 이번주 로또번호를 예측해주세요."})
        // }
        console.log("testtest", messages);
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,   
          });
          let lotto = completion.data.choices[0].message['content'];
          res.json(lotto);
          console.log(lotto);
          //res.json({"assistant" : lotto});
        } catch (e) {
          console.error(e);
        }
});

/* 배포용 serverless */
module.exports.handler = serverless(app);

//* localhost test용 */
//app.listen(3001)

