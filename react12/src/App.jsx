import {BrowserRouter} from 'react-router-dom'
import Navbar from "./Navbar/Navbar"

let App=()=>{
    return <>
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
    </>
}
export default App