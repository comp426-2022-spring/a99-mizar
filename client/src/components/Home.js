// import { TwitterTweetEmbed } from 'react-twitter-embed'
import ValenceScoreChecker from './common/ValenceScoreChecker.js';
import Nav from './common/Nav';
import '../css/Page.css';

const Home = () => {
  return ( 
    <div id="home">
      <Nav />
      <div className='TextContainer'>
        <h1 className='Title'>Welcome! We are team Mizar, and this is our final project for COMP 426.</h1>
        <h3 className='Description'>
          Our group made a program using Twitter API to determine the valence of tweets. Valence is a score that
          gauges the sentiment of words. You can look at the valence score of tweets within the past week or input
          your own tweet text or other string of text. Our initial goal was to look at valence scores from tweets ranging from the beginning of
          Covid-19 to today, but the Twitter API is averse to allowing people to use older tweets in order to
          protect users' privacy. This would have allowed us to gauge people's emotions during different major
          points in the pandemic. As it is, we can gauge people's emotions within the past week and connect people
          to mental health resources, especially if their valence score is low.
        </h3>
        <h3 className='Description'>
          Enter some text to see its valence score below, check out some of the mental health resources we've compiled
          on the Resources page, or take a look at how happy or sad recent tweets have been on average on the Sentiment page!
        </h3>
      </div>
      <ValenceScoreChecker />
    </div>
  );
}

export default Home;
