import React from 'react'
import Navbar from './Navbar/Navbar'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './website/Home'
import About from './website/About'
import Services from './website/Services'
import Login from './FormHandling/Login'
import Reg from './FormHandling/Reg'
import Message from './Hooks/Message'
import Counter from './Hooks/Counter'
import Product from './Hooks/Product'
const App = () => {
  return (
    <div>
       
        <BrowserRouter>       
              <Navbar/>
        
        <Switch>
            <Route path="/message" component={Message}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/login" component={Login}/>
            <Route path="/index" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/counter" component={Counter}/>
            <Route path="/product" component={Product}/>
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App