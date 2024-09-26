var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <div className = 'headerContainer'>
    
    <h1>Conduit</h1>
   
    <ul className='nav'>

      <li className='link'>
        <NavLink  exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink activeClassName='active' to='/components/SignIn'>Sign In</NavLink>
      </li>
      <li className='link'>
        <NavLink activeClassName='active' to='/components/SignUp'>Sign Up</NavLink>
      </li>
    </ul>
    </div>
  
  )
}

export default Nav;