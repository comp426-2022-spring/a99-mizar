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

This is a simple ping endpoint to make sure the app is running.

### Sentiment Analysis: `/sentiment/:tweet`

This endpoint takes advantage of the `sentiment` NLP tool to process a string of text and return a sentiment score. This score is positive for "happy" language and negative for "sad" language.

### Get COVID-related Tweets: `/allCovidTweets`

This endpoint takes advantage of the Twitter API in order to return Tweet IDs and content based on an array of COVID-related search terms.

### Get Tweets based on search term: `/searchTweets/:searchTerm`

This endpoint takes advantage of the Twitter API in order to return Tweet IDs and content based on any search term.

### Login: `/login` (Not yet Implemented)

We plan to implement a user database using the model we learned in class, and we will store user information and tweets. We will also use OAuth to connect a user's Twitter account to this app.

### Register: `/register` (Not yet Implemented)

We plan to implement a user database using the model we learned in class, and we will store user information and tweets. We will also use OAuth to connect a user's Twitter account to this app.

### Pull my tweets: `/searchTweets/user/:userId` (Not yet Implemented)

We plan to implement a user database using the model we learned in class, and we will store user information and tweets. We will also use OAuth to connect a user's Twitter account to this app.
