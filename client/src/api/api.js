import axios from 'axios';

// this API_HOST variable is currently just the location of our local backend server.
// if we were to deploy this app, we would have production and development environments,
// with different API_HOST variables for each.
const API_HOST = 'http://localhost:5000/'

export async function getSentiment(tweet) {
  const res = await axios.get(API_HOST + 'sentiment/' + tweet);
  return res.data.sentiment.score;
}

export async function getCOVIDTweets() {
  
}
