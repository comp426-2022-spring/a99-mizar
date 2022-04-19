import { NavLink } from 'react-router-dom';
import '../../css/Nav.css';

const Nav = () => {
  return (
    <div className='NavContainer'>
      <nav className='Nav'>
        <span className='NavItem'>
          <NavLink to='/about'>About</NavLink>
        </span>
        <span className='NavItem'>
          <NavLink to='/resources'>Resources</NavLink>
        </span>
      </nav> 
    </div>
  );
}

export default Nav;
