import { /* getSentiment,*/ getTweetsBySearchTerm } from '../api/api.js';
// import { processValenceScore } from '../utils/valence.js';
import { TwitterTweetEmbed } from 'react-twitter-embed'
import ReactLoading from 'react-loading';
import Nav from './common/Nav.js';
import { useState } from 'react';
import '../css/Page.css';

const Sentiment = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState(<div></div>);

  async function handleTweetSearch() {
    setErrorMsg('');
    setLoading(true);
    const searchTerm = document.getElementById('twitterinput').value;
    if (!searchTerm) {
      setErrorMsg('Please enter text to search Twitter and see valence');
      setLoading(false);
      return;
    }

    // get 10 tweets from Twitter based on the search term
    const tweetResults = await getTweetsBySearchTerm(searchTerm);
    const tweetComponents = tweetResults.map((tweet) => {return <TwitterTweetEmbed key={tweet.id} tweetId={tweet.id} />});
    setLoading(false);
    setTweets(tweetComponents);
  }

  /*
    NOT YET IMPLEMENTED: need to parse tweet text for words in the English language
    because the Sentiment library we are using only takes in valid English words.
  */
  // function calculateAverageValence() {
  //   const tweetText = tweets.map((tweet) => {
  //     try {
  //       getSentiment(tweet.text.replace(/^([^ ]+ ){2}/, ''))
  //     } catch(e) {
  //       return 'Neutral';
  //     }
  //   });

  //   const avgValenceScore = tweetText.reduce((a, b) => a + b, 0) / tweetText.length;
  //   return processValenceScore(avgValenceScore);
  // }

  return (
    <div id="Sentiment">
      <Nav />
      <h1 className='Title'>Valence on Twitter</h1>
      <h3>Enter a term below to see the valence of relevant tweets</h3>
      <div>
        <input
          placeholder='Enter twitter search term'
          className='ValenceInput'
          id='twitterinput'
        />
      </div>
      <button 
        onClick={handleTweetSearch}
        className='ValenceButtonSmall'
      >
        Search Twitter
      </button>
      <div className="Error">{errorMsg}</div>

      {/*
        NOT YET IMPLEMENTED: need to parse tweet text for words in the English language
        because the Sentiment library we are using only takes in valid English words.
      */}
      {/* <div className='ValenceResult'>
        {tweets ? calculateAverageValence() : ''}
      </div> */}

      <div className='TweetsContainer'>
        {loading ? <div className='Center'><ReactLoading height={100} width={200} /></div> : ''}
        {tweets}
      </div>

    </div>
  );
}

export default Sentiment;
