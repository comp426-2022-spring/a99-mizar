import Nav from './common/Nav.js';
import '../css/Page.css';

const Resources = () => {
  return (
    <div id="resources">
      <Nav />
      <div className='TextContainer'>
        <h1 className='Title'>This page contains a list of mental health resources our team has compiled. </h1>
        
          {/* /* TODO: put resources here in <a> tags that link off of our page */}
            {/* example: */}
              {/* <a className='' href='RESOURCE_URL'>RESOURCE_NAME</a> */}

            {/* we can style these later, I think it's best to just get them all on the page right now. */}
        <ul className='list'>
          <li className='LinkContainer'>
            <a className='link' href='https://suicidepreventionlifeline.org/'>National Suicide Prevention Hotline</a>
          </li>
          <br></br>
          <li className='LinkContainer'>
            <a className='link' href='http://www.thehotline.org/'>National Domestic Violence Hotline</a>
          </li>
          <br></br>
          <li className='LinkContainer'>
            <a className='link' href='https://www.veteranscrisisline.net/'>Veterans Crisis Line</a>
          </li>
          <br></br>
          <li className='LinkContainer'>
            <a className='link' href='http://finder.psychiatry.org/'>American Psychiatric Association</a>
          </li>
          <br></br>
          <li className='LinkContainer'>
            <a className='link' href='http://treatment.adaa.org/'>Anxiety and Depression Association of America: Find a Therapist</a>
          </li>
          <br></br>
          <li className='LinkContainer'>
            <a className='link' href='https://itunes.apple.com/us/app/breathe2relax/id425720246?mt=8'>Breath2Relax is a free portable stress management tool</a>
          </li>
          <br></br>
          <li className='LinkContainer'>
            <a className='link' href='http://www.allianceofhope.org/'>Alliance of Hope for Suicide Loss Survivors</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;
