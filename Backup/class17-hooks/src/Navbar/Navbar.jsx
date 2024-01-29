import React from 'react'

import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className="navbar-brand">Logo</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/userapi" className="nav-link">Users</Link></li>
                   
                    <li><Link to="/home" className="nav-link">Home</Link></li>
                    
                </ul>
            </div>
        </nav>
    }
}
export default Navbar