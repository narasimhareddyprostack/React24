import React from 'react'

class Message extends React.Component{
    
    constructor(props){
        super(props)
        console.log("First Constructor")
        this.state = {
            msg:"Hello"
        }
    }
    gmHandler = ()=>{
        this.setState({ msg:"GM"})
    }
    gaHandler = ()=>{
           this.setState({ msg:"GA"})
    }
    geHandler = ()=>{
           this.setState({ msg:"GE"})
    }
    gnHandler = ()=>{
           this.setState({ msg:"GN"})
    }
    render(){
        console.log("Second  render")
        return <div>
        <h1>Message Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Message Value:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.geHandler}>GE</button>
        <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message