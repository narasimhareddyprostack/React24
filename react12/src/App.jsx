import React from 'react'
import Navbar from './Navbar/Navbar'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Hooks/Home'
import User from './Hooks/User'
const App = () => {
  return (
    <div>
       
        <BrowserRouter>       
              <Navbar/>
        
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/userapi" component={User}/>
           
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App