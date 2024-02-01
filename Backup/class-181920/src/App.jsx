import {BrowserRouter} from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './Contacts/Home'
import Contacts from './Contacts/Contacts'
let App=()=>{
    return <>
    <BrowserRouter>
        <Navbar/>

        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    </BrowserRouter>
    </>
}
export default App