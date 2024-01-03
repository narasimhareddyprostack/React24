import React from 'react'
import Header from './Header'
import Footer from './Footer'
class App extends React.Component{



    render(){
        return <div>
            <h1>App Component</h1>
            <hr />
            <Header/>
           <Footer/>
        </div>
    }
}
export default App