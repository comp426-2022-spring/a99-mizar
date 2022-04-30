import Nav from './common/Nav.js';
import { useState } from 'react';
import '../css/Page.css';

const Sentiment = () => {
  const [errorMsg, setErrorMsg] = useState('');

  async function handleTweetSearch() {
    const searchTerm = document.getElementById('valenceInput').value;
    if (!searchTerm) {
      setErrorMsg('Please enter text to check valence');
      return;
    }
  }

  return (
    <div id="Sentiment">
      <Nav />
      <h1 className='Title'>Placeholder Title</h1>
      <h3>Enter a term below to see the valence of related tweets</h3>
      <div>
        <input
          placeholder='Enter twitter search term'
          className='ValenceInput'
          id='twitterinput'
        />
      </div>
    </div>
  );
}

export default Sentiment;
