import React from 'react'
import Axios from 'axios'
class Employee extends React.Component{
    constructor(props){
        super()
        console.log("First constructor")
    }
    componentDidMount(){
        console.log("Third did mount")
    }
    render(){
            console.log("Second Render method")
                return <div>
                    <h2>Employee Component</h2>
                </div>
        }
}
export default Employee