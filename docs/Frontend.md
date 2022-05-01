### Frontend Documentation

Our frontend is built in React.js and currently has three views, which are detailed below. These views connect to and leverage our established API endpoints. For more information about the API endpoints, check out the API.md file in this directory.

## Dependencies

Here is a list of our frontend dependencies, which can also be found in `client/package.json`:
- "axios": "^0.27.2",
- "cra-template": "1.1.3",
- "react": "^18.0.0",
- "react-dom": "^18.0.0",
- "react-router-dom": "^6.3.0",
- "react-scripts": "5.0.0",
- "react-twitter-embed": "^4.0.4",
- "web-vitals": "^2.1.4"

## Views

### Home: `/`

This is the home page of our website. This page contains a short description about our project. It also includes a proof of concept sentiment analysis, in which the user can enter a string of text that will then be processed using a sentiment library. A valence score will be returned that shows how happy or sad the text is. This is just a proof of concept to get the user familiar with valence and sentiment analysis.

### Mental Health Resources: `/resources`

This page contains a list of relevant mental health resources compiled by our team during this project. We plan to eventually implement functionality that analysis the personal tweets of a user (via a connected Twitter account) in order to link the user to relevant resources based on tweet sentiment analysis. For now, this page is just home to our resource list.

### Twitter Search, Sentiment Analysis: `/sentiment`

This page allows the user to enter a search term that will then be used to search for and return a list of related tweets. The returned tweets are displayed using a React/Twitter component plugin `react-twitter-embed`. We plan to then run sentiment analysis on these returned tweets to calculate the average of sentiment scores. This will require some cleaning of the tweet content that is being returned. Since the current sentiment analysis tool we are using only takes in valid English words as input, it cannot handle some of the words in the tweet content that is being returned. We will clean this data to strip away words that aren't valid English and then run the sentiment analysis.

### Login: `/login` (Not yet Implemented)

A simple login page.

### Register: `/register` (Not yet Implmemented)

A simple register page.

### Profile Page: `/profile` (Not yet Implemented)

This page will contain information about the user's account and will allow the user to connect a Twitter account to this app. That Twitter account will then be used to pull personal tweets and conduct relevant sentiment analysis.
