const express = require("express")
const minimist = require("minimist")
var Sentiment = require('sentiment');

const app = express()
const args = minimist(process.argv.slice(2))
const port = args.port || 5000

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


// Default response for any other request
// This must be at the end
app.use(function (req, res) {
  res.status(404).send("404 NOT FOUND")
})