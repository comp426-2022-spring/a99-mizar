import Nav from './common/Nav.js';
import '../css/Page.css';

const Resources = () => {
  return (
    <div id="resources">
      <Nav />
      <div className='TextContainer'>
        <h1 className='Title'>This page contains a list of mental health resources our team has compiled. </h1>
        {/* TODO: put resources here in <a> tags that link off of our page
            example:
              <a className='' href='RESOURCE_URL'>RESOURCE_NAME</a>

            we can style these later, I think it's best to just get them all on the page right now.
        */}
      </div>
    </div>
  );
}

export default Resources;
