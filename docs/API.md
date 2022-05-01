# API Documentation

Our API has four specific endpoints that have been implemented, which are detailed below. We have not yet implemented a database, but our plans to do so while expanding API endpoints are also detailed below.

## Dependencies

Here is a list of our backend dependencies, which can also be found in `package.json`:
- "cors": "^2.8.5",
- "dotenv": "^16.0.0"
- "express": "^4.17.3"
- "minimist": "^1.2.6"
- "needle": "^3.1.0"
- "sentiment": "^5.0.2" (https://www.npmjs.com/package/sentiment#how-it-works)
- "twitter-api-v2": "^1.11.2"

## Endpoints

Below is a list of our API endpoints.
 
### Root: `/`

### Sentiment Analysis: `/sentiment/:tweet`

### Get COVID-related Tweets: `/allCovidTweets`

### Get Tweets based on search term: `/searchTweets/:searchTerm`

### Login: `/login` (Not yet Implemented)

### Register: `/register` (Not yet Implemented)

### Pull my tweets: `/searchTweets/user/:userId` (Not yet Implemented)
