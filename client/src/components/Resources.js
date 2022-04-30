import Nav from './common/Nav.js';
import '../css/Page.css';

const Resources = () => {
  return (
    <div id="resources">
      <Nav />
      <div className='TextContainer'>
        <h1 className='Title'>This page contains a list of mental health resources our team has compiled. </h1>
        {
          /* TODO: put resources here in <a> tags that link off of our page
            example:
              <a className='' href='RESOURCE_URL'>RESOURCE_NAME</a>

            we can style these later, I think it's best to just get them all on the page right now.
        */
          <a className='' href='https://suicidepreventionlifeline.org/'>National Suicide Prevention Hotline</a>, 
          <a className='' href='http://www.thehotline.org/'>National Domestic Violence Hotline</a>, 
          <a className='' href='https://www.veteranscrisisline.net/'>Veterans Crisis Line</a>, 
          <a className='' href='http://finder.psychiatry.org/'>American Psychiatric Association</a>, 
          <a className='' href='http://treatment.adaa.org/'>Anxiety and Depression Association of America: Find a Therapist</a>, 
          <a className='' href='https://itunes.apple.com/us/app/breathe2relax/id425720246?mt=8'>Breath2Relax is a free portable stress management tool</a>, 
          <a className='' href='http://www.allianceofhope.org/'>Alliance of Hope for Suicide Loss Survivors</a>
          }
      </div>
    </div>
  );
}

export default Resources;
