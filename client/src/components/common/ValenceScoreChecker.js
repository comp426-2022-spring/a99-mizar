import { processValenceScore } from '../../utils/valence.js';
import { getSentiment } from '../../api/api.js';
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
        {(valenceScore || valenceScore == '0') ? processValenceScore(valenceScore) : ''}
      </div>
    </div>
  );
}

export default ValenceScoreChecker;
