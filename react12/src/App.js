import React from 'react'
import Product from './Product/Product'
import Message from './Message/Message'
import Salary from './Message/Salary'
import Employee from './Employee/Employee'
const App = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
          <a href="#"  className='navbar-brand'>Bootstrap - Product</a>
        </nav>
        <Employee/>
    </div>
  )
}

export default App