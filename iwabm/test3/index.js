var unirest = require('unirest');

unirest.post("https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/")
.header("X-RapidAPI-Key", "0d13fd3022mshdc7af5bb08d03acp1e0ab9jsnbb5073cbb404")
.header("Content-Type", "application/x-www-form-urlencoded")
.send("text=I live alone and I have so many homework to do, but I have a cute dog")
.end(function (result) {
  console.log(result.body.emotion_scores.joy,
              result.body.emotion_scores.fear,
              result.body.emotion_scores.anger,
              result.body.emotion_scores.surprise,
              result.body.emotion_scores.sadness,
              result.body.emotion_scores.disgust);


    //如何用数字去生成颜色百分比color palette
    //如何Mix颜色一起
    //如何call text?


});
