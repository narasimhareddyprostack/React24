import React from 'react'
import Product from './CRUD/Product'
import CreateProduct from './CRUD/CreateProduct'
import {Link, BrowserRouter, Route,Switch} from 'react-router-dom'
const App = () => {
  return (
    <div>
        
        <BrowserRouter>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/" className="navbar-brand"> Product CRUD</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/admin" className="nav-link">Admin</Link></li>
                    <li><Link to="/new" className="nav-link">New Product</Link></li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route path="/products" component={Product}/>
            <Route path="/new" component={CreateProduct}/>
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App