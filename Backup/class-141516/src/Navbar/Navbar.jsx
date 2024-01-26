import React from 'react'

import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className="navbar-brand">Logo</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/userapi" className="nav-link">useEffect-Ex</Link></li>
                    <li><Link to="/product" className="nav-link">useStateEx-3</Link></li>
                    <li><Link to="/counter" className="nav-link">useStateEx-2</Link></li>
                    <li><Link to="/message" className="nav-link">useStateEx-1</Link></li>
                    <li><Link to="/reg" className="nav-link">Registration</Link></li>
                   {/*  <li><Link to="/login" className="nav-link">Login</Link></li> */}
                    <li><Link to="/index" className="nav-link">Home</Link></li>
{/*                     <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li> */}
                    {/* <li><Link to="/contact" className="nav-link">Contact</Link></li> */}
                </ul>
            </div>
        </nav>
    }
}
export default Navbar