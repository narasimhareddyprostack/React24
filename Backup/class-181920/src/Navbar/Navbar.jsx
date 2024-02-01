import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar bg-dark navbar-expand-lg'>
    <Link to="/home" className="navbar-brand">React All</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li> <Link className="nav-link" to="/home">Home</Link> </li>
            <li> <Link className="nav-link" to="/contacts">Contacts</Link> </li>
            <li> <Link className="nav-link" to="/login">Login</Link> </li>
        </ul>
    </div>
  </nav>
}

export default Navbar