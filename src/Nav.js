var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <div className = 'headerContainer'>

    
   
    <ul className='nav'>
    <h1 className='Header'>Conduit</h1>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/components/SignIn'>Sign In</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/components/SignOut'>Sign Out</NavLink>
      </li>
    </ul>
    </div>
  
  )
}

export default Nav;