import { getSentiment } from '../../api/api.js';
import neutral from './images/neutral.png';
import happy from './images/happy.png';
import sad from './images/sad.jpg';
import '../../css/ValenceScoreChecker.css';
import { useState } from 'react';

const ValenceScoreChecker = () => {
  const [valenceScore, setValenceScore] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleValenceSubmission() {
    setValenceScore('');
    setErrorMsg('');

    const tweet = document.getElementById('valenceInput').value;
    if (!tweet) {
      setErrorMsg('Please enter text to check valence');
      return;
    }

    const score = await getSentiment(tweet);
    setValenceScore(score);
  }

  function processValenceScore() {
    if (valenceScore >= 2) {
      return <div><img className="ScoreImg" alt ='HappyFace' src={happy} /></div>;
    } else if (valenceScore <= -2) {
      return <div><img className="ScoreImg" alt='SadFace' src={sad} /></div>;
    } else {
      return <div><img className="ScoreImg" alt='NeutralFace' src={neutral} /></div>
    }
  }

  return (
    <div>
      <div>
        <input
          placeholder='Enter text to see the valence'
          className='ValenceInput'
          id='valenceInput'
        />
      </div>
      <button 
        onClick={handleValenceSubmission}
        className='ValenceButton'
      >
        Check Valence
      </button>
      <div className="Error">{errorMsg}</div>
      <div className="Score">
        {valenceScore ? processValenceScore() : ''}
      </div>
    </div>
  );
}

export default ValenceScoreChecker;
