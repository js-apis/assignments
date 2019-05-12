// read module
const express = require('express');
var unirest = require('unirest');

// make express Application
const app = express();

app.get('/', (req, res) => {
    // クライアントに送るJSONデータ
    unirest.post("https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/")
    .header("X-RapidAPI-Key", "0d13fd3022mshdc7af5bb08d03acp1e0ab9jsnbb5073cbb404")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("text=I live alone and I have so many homework to do, but I have a cute dog")
    .end(function (result) {
      res.json(result); // display in the browser

      console.log(result.body.emotion_scores.joy,
                  result.body.emotion_scores.fear,
                  result.body.emotion_scores.anger,
                  result.body.emotion_scores.surprise,
                  result.body.emotion_scores.sadness,
                  result.body.emotion_scores.disgust);
    });
});

// create server at port 3000. you can access by localhost:3000
app.listen(3000, () => console.log('Listening on port 3000'));
