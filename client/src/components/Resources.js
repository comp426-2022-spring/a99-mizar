import Nav from './common/Nav.js';
import '../css/Page.css';

const Resources = () => {
  return (
    <div id="resources">
      <Nav />
      <div className='TextContainer'>
        <h1 className='Title'>This page contains a list of mental health resources our team has compiled. </h1>
        <ul>
          <li>
            <a className='' href='https://suicidepreventionlifeline.org/'>National Suicide Prevention Hotline</a>
          </li>
          <li>
            <a className='' href='http://www.thehotline.org/'>National Domestic Violence Hotline</a>
          </li>
          <li>
            <a className='' href='https://www.veteranscrisisline.net/'>Veterans Crisis Line</a>
          </li>
          <li>
            <a className='' href='http://finder.psychiatry.org/'>American Psychiatric Association</a>
          </li>
          <li>
            <a className='' href='http://treatment.adaa.org/'>Anxiety and Depression Association of America: Find a Therapist</a>
          </li>
          <li>
            <a className='' href='https://itunes.apple.com/us/app/breathe2relax/id425720246?mt=8'>Breath2Relax is a free portable stress management tool</a>
          </li>
          <li>
            <a className='' href='http://www.allianceofhope.org/'>Alliance of Hope for Suicide Loss Survivors</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;
