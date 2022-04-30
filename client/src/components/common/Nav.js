import { NavLink } from 'react-router-dom';
import '../../css/Nav.css';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#2E3E61"
}

const Nav = () => {
  return (
    
    <div className='NavContainer'>
      <div className='MainTitleContainer'>
        <h1 className='MainTitle'>Mizar Mental Health</h1>
      </div>
      <nav className='Nav'>
        <span className='NavItem'>
          <NavLink style={linkStyle} to='/'>Home</NavLink>
        </span>
        <span className='NavItem'>
          <NavLink style={linkStyle} to='/resources'>Resources</NavLink>
        </span>
        <span className='NavItem'>
          <NavLink style={linkStyle} to='/sentiment'>Twitter Sentiment</NavLink>
        </span>
      </nav> 
    </div>
  );
}

export default Nav;
