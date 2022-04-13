const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
    appKey: process.env.appKey,
    appSecret: process.env.appSecret,
    TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_SECRET: process.env.TWITTER_ACCESS_SECRET,
}