const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dialogflow = require("dialogflow");

const app = express();

const projectId = "pendulumtest-bf0cf";
const sessionId = "123456";
const query = "what do you do";
const languageCode = "en-US";
let config = {
  credentials: {
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD0X/NJtqhgHb8Q\nMWj+XcjY/1WgA/hhXPKDWPB6zi3mx4lufx4m69WRJmxo+fOb0K61rYFG1BKeV5Yq\ntrhN5DmG3uRNoQ0NtGiw9rDkMWFKv35WBOvxb9NNRq7QKPpgBTlgOFjJBZfWZ5fa\nSWbPXKKtFpnC4iB5nxDE5v/EY4C7gRWVeTniRrJdbg3YVum+qDEE1TtGRAAMjBve\nuhyB4JLoMsETSVY+tb2tgDVkFaPS+gtgxL/fetcJsvbrAkjwqf1X+SZYnMLu7D8y\n9ddpZLcsLqZYSjn8si+YLaIFqjUFsyrKBhiwJEQs1e1NdSRNK7z2XXL7YDy/CPO8\nGNKVpES9AgMBAAECggEAapUUr5A+dJlUtTPPpq1xxY7rofxJTvGyhe37CJy3MWHS\nw4ImvPP79DAtdUWa5dkI8g0oBqPFMRFjWeLSlIpXOscpDOCSqGkIhjI56XTOCcNm\nTw8bdvR+VMRgx0IwHUP6B8jblGVfmXAaL2b3M7aj7tkeG/zzDAh/0FktsVJymZQz\nh2Mgby/hADa4Yo9eMGQOUWQxG8ouRueFX30jh21/CCrbWAcjtYNveX129nDBPQnV\nKGSjdJTB+3X1iUhJiLu9p1BzRRAA6lD1/MXRErsmrFCJTsYkq9dOTg6bEY3J/s7E\nZJsBljkREEAap0tl5ooBFRNLIFnbg2nBV6iiDMCmQwKBgQD+XqKdv2zd+u25gSvS\nDsOZ4t+7BNZAbz9Pyo9/nN3bc9yOHAvjIauRxWptcfRiCQMD18+vjY5M6znEL4JU\nwWffV8JrJsOPwOJMUixU6YiTiT4b0yNx1ump+8WzXjmMRJGK9PEGHV2oLlnNO2qy\n/ksc6/2OkNTOEjnR/O9P8WbeDwKBgQD18OpufhEw1+t2e8rh87LAarOHjhiGZ+Z+\nCMK3VAgZg7vDMXgSCR/RnFV90zTleFiozZYLTE+d+jyy7xtsBeerXFvgWpw2d+gH\nYZjiJHf7kjdrY9gA4YF62xPxtzVx2hlTGeKGw8dD24uP6qag2ShlC5NpPE7vLk38\nQbwrxG08cwKBgQD6fgMxyULSTrswBM48a6Gft1WPfDHo/iSg1N7/UmEALVay81eZ\ncpzcTkaCRMfeivVXIX06afIKOVKHqil0gYli3a9tiZznwZCYjAtwCxIeB/cLu56a\nCoPMi02jV1Tglt2ks5Vu6hhC+HIiszJd1iHt90+Yx3NpA3XBHo4kcZtVbQKBgQDh\n+/O9gXNUWSKP5WHfyuh169V4+jVI0xG0v2IDyGAE6cnOqpb0o5OsLCVWD4ssSy/U\nM8vqJ72EoJnDpPeig66DA8OcXEXrurPmjGRJb08cRxdLQxwIey1ZcRJbaYffTJM2\ni7NdN2nSzVno7KkdZUy7xC44ZWT2W6rm3pQD92KURwKBgD2enq8x00blan53yUe7\no52QFUJ5FcTf4lacWsjql9tVzgmbaaHUH4PNOmXIuhcssklErVEzkfiD0smXndsX\nDy3F1gTWYd51mIdd2idLZhDOC7KjefR5FKkFfHBWOa46dS8fl0kiLfnS3VUNZt+g\nZZTAj/QJx7xrrRYQIy9GhqSM\n-----END PRIVATE KEY-----\n",
    client_email: "dialogflow-lgdnlw@pendulumtest-bf0cf.iam.gserviceaccount.com"
  }
};

const sessionClient = new dialogflow.SessionsClient(config);
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: query,
      languageCode: languageCode
    }
  }
};

app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Hello I'm and API");
});

app.get("/pendulum", function(req, res) {
  sessionClient
    .detectIntent(request)
    .then(responses => {
      console.log("Detected intent");
      const result = responses[0].queryResult;
      //console.log(result);
      console.log(`  Action: ${result.action}`);
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
        res.send(result.fulfillmentText);
      } else {
        console.log(`  No intent matched.`);
      }
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
});

app.post("/pendulum", function(req, res) {
  const question = req.body.question;
  sessionClient
    .detectIntent({
      session: sessionPath,
      queryInput: {
        text: {
          text: question,
          languageCode: languageCode
        }
      }
    })
    .then(responses => {
      console.log("Detected intent");
      const result = responses[0].queryResult;
      //console.log(result);
      console.log(`  Action: ${result.action}`);
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
        res.send(result.fulfillmentText);
      } else {
        console.log(`  No intent matched.`);
      }
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
});

app.listen(app.get("port"), () =>
  console.log("Webhook server is listening, port", app.get("port"))
);
