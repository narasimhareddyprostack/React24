import React from 'react'
import User from './User'
class Emp extends React.Component{
    emp={
        name:"Rahul Gandhi",
        sal:45000,
        id:101,
        loc:['Wayanad','Mysore','KK']
     }
    render(){
        return <div>
                <h2>Employee Component</h2> 
                <hr />
                <User  user={this.emp}  msg={"GM"}/>
                </div>
    }
}

export default Emp
