import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Movie from './Message/Movie'
import './assets/css/styles.css'
function App(){


    return <div>
                <Navbar/>
                 <h1>App Component</h1>
                 <hr />
                {/*  <Message/> */}
                <Movie/>
                
           </div>
}
export default App