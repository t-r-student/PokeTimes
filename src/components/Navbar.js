import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Poke' Times</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/child'>Child</NavLink></li>
          <li><NavLink to='/post/:post_id'>Post</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default withRouter(Navbar)