import '../css/ValenceScoreChecker.css';
import { useState } from 'react';

const ValenceScoreChecker = () => {
  const [errorMsg, setErrorMsg] = useState('');

  function handleValenceSubmission() {
    const input = document.getElementById('valenceInput').value;
    if (!input) {
      setErrorMsg('Please enter text to check valence');
      return;
    }

    setErrorMsg('');

    // TODO: send to API, bring back response
    
    // TODO: based on the valence score that's returned from the API, display a happy or sad face and short description
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
        onClick={() => handleValenceSubmission()}
        className='ValenceButton'
      >
        Check Valence
      </button>
      <div className="Error">{errorMsg}</div>
    </div>
  );
}

export default ValenceScoreChecker;
