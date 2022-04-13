import '../css/Home.css';
import {TwitterTweetEmbed} from 'react-twitter-embed'

const Home = () => {
  return ( 
    <div id="home">
      <h1 className='Home'>Home Page</h1>
      <TwitterTweetEmbed tweetId={'933354946111705097'}/>
    </div>

  )

}

export default Home;
