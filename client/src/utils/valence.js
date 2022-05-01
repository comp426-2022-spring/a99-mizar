import neutral from './images/neutral.png';
import happy from './images/happy.png';
import sad from './images/sad.jpg';

export function processValenceScore(valenceScore) {
  if (valenceScore >= 2) {
    return <div><img className="ScoreImg" alt ='HappyFace' src={happy} /></div>;
  } else if (valenceScore <= -2) {
    return <div><img className="ScoreImg" alt='SadFace' src={sad} /></div>;
  } else {
    return <div><img className="ScoreImg" alt='NeutralFace' src={neutral} /></div>
  }
}
