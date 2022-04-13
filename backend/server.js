const express = require("express")
const minimist = require("minimist")
const Sentiment = require('sentiment');

const needle = require('needle');


const app = express()
const args = minimist(process.argv.slice(2))
const port = args.port || 3000

const config = require('./config.js')
const { TwitterApi } = require('twitter-api-v2');
const { TWITTER_BEARER_TOKEN, appKey, appSecret, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET } = require("./config.js");
const { query } = require("express");


const server = app.listen(port, () => {
  console.log(`App is running on ${port}`)
})

app.get("/", (req, res) => {
  console.log("hello")
  // Respond with status 200
  res.statusCode = 200

  // Respond with status message "OK"
  res.statusMessage = "OK"
  res.writeHead(res.statusCode, { "Content-Type": "text/plain" })
  res.end(`${res.statusCode} ${res.statusMessage}`)
})


app.get("/sentiment/:tweet", (req, res) => {
  const tweet = req.params.tweet
  const sentiment = new Sentiment();
  const result = sentiment.analyze(tweet);
  res.status(200).header({ "Content-Type": "text/json" }).json({ tweet: tweet, sentiment: result })
})

app.get("/toptweets/", async (req, res) => {
  // Instanciate with desired auth type (here's Bearer v2 auth)
  const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN);

  // let query = 'from:twitterapi since:2011-06-20 until:2011-06-20'
  const jsTweets = await twitterClient.readOnly.v2.search('covid');



  // Consume fetched tweet from first page of jsTweets
  // for (const tweet of jsTweets) {
  //   tweetArr.push(tweet.id)
  // }
  //   console.log(tweetArr)

  res.status(200).header({ "Content-Type": "text/json" }).json(jsTweets["_realData"].data)
})



// Default response for any other request
// This must be at the end
app.use(function (req, res) {
  res.status(404).send("404 NOT FOUND")
})