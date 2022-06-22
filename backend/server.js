const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dialogflow = require("dialogflow");

const app = express();

const projectId = process.env.PROJECT_ID;
const sessionId = process.env.SESSION_ID;
const query = "what do you do";
const languageCode = "en-US";
let config = {
  credentials: {
    private_key: process.env.KEY,
    client_email: process.env.EMAIL
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
