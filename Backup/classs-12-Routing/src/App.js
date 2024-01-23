import React, { Component } from 'react'
import {Link,BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './website/Home'
import About from './website/About'
import Services from './website/Services'
import Contact from './website/Contact'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className='navbar-brand'>Logo</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to="/index" className='nav-link'>Home</Link></li>
                <li><Link to="/about" className='nav-link'>About</Link></li>
                <li><Link to="/services" className='nav-link'>Services</Link></li>
                <li><Link to="/contact" className='nav-link'>Contact</Link></li>
            </ul>
        </div>
            </nav>
            <Routes>
                <Route path="/index" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes> 
        </BrowserRouter>
      </div>
    )
  }
}

export default App