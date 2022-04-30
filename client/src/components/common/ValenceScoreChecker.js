import { getSentiment } from '../../api/api.js';
import '../../css/ValenceScoreChecker.css';
import { useState } from 'react';

const ValenceScoreChecker = () => {
  const [valenceScore, setValenceScore] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleValenceSubmission() {
    setValenceScore('');
    const tweet = document.getElementById('valenceInput').value;
    if (!tweet) {
      setErrorMsg('Please enter text to check valence');
      return;
    }

    setErrorMsg('');

    const score = await getSentiment(tweet);

    // TODO: based on the valence score that's returned from the API, display a happy or sad face and short description
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
      <div className="Score">{`Valence: ` + valenceScore}</div>
    </div>
  );
}

export default ValenceScoreChecker;
