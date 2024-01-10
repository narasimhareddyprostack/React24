import React from 'react'

class Message extends React.Component{
    
    constructor(props){
        super(props)
        console.log("First Constructor")
        this.state = {
            msg:"Hello"
        }
    }
    updateHanlder= (value)=>{
        this.setState({msg:value})
    }
    render(){
        console.log("Second  render")
        return <div>
        <h1>Message Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Message Value:{this.state.msg}</h3>
        <button onClick={this.updateHanlder.bind(this,"Good Morning")}>GM</button>
        <button onClick={this.updateHanlder.bind(this,"Good Afternoon")}>GA</button>
        <button onClick={this.updateHanlder.bind(this,"Good Evening")}>GE</button>
        <button onClick={this.updateHanlder.bind(this,"Good Night")}>GN</button>
        </div>
    }
}
export default Message