import React from 'react'
import Navbar from './Navbar/Navbar'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './website/Home'
import About from './website/About'
import Services from './website/Services'
import Login from './FormHandling/Login'
import Reg from './FormHandling/Reg'
const App = () => {
  return (
    <div>
       
        <BrowserRouter>       
              <Navbar/>
        
        <Switch>
            <Route path="/reg" component={Reg}/>
            <Route path="/login" component={Login}/>
            <Route path="/index" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App