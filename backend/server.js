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

app.set('json spaces', 2)

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

app.get("/allCovidTweets/", async (req, res) => {
  // Instanciate with desired auth type (here's Bearer v2 auth)
  const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN);

  const searchTerms = ["COVID", "COVID-19", "virus", "outbreak", "pandemic", "quarantine", "symptom", "spread", "social distancing", "vaccine", "immunity", "case", "contagious", "infectious"]
  const covidTweets = {}


  for (let i in searchTerms) {
    let term = searchTerms[i]
    const jsTweets = await twitterClient.readOnly.v2.search(term);
    covidTweets[term] = jsTweets["_realData"].data

  }

  res.status(200).header({ "Content-Type": "text/json" }).json(covidTweets)
})

app.get("/searchTweets/:searchTerm", async (req, res) => {
  const searchTerm = req.params.searchTerm

  // Instanciate with desired auth type (here's Bearer v2 auth)
  const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN);
  const jsTweets = await twitterClient.readOnly.v2.search(searchTerm, { 'language_code': 'en' });

  res.status(200).header({ "Content-Type": "text/json" }).json(jsTweets["_realData"].data)
})


// Default response for any other request
// This must be at the end
app.use(function (req, res) {
  res.status(404).send("404 NOT FOUND")
})