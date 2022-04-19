import { TwitterTweetEmbed } from 'react-twitter-embed'
import Nav from './common/Nav';
import '../css/Home.css';

const Home = () => {
  return ( 
    <div id="home" className='Home'>
      <Nav />
      <TwitterTweetEmbed tweetId={'933354946111705097'}/>
      <p className='Description'>
        Our group made a program using Twitter API to determine the valence of tweets. Valence is a score that
        gauges the sentiment of words. You can look at the valence score of tweets within the past week or input
        your own tweet. Our initial goal was to look at valence scores from tweets ranging from the beginning of
        Covid-19 to today, but the Twitter API is averse to allowing people to use older tweets in order to
        protect users' privacy. This would have allowed us to gauge people's emotions during different major
        points in the pandemic. As it is, we can gauge people's emotions within the past week and connect people
        to mental health resources, especially if their valence score is low.
      </p>
    </div>
  );
}

export default Home;
