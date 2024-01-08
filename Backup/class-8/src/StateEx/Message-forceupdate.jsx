import React from 'react'
class Message extends React.Component{

    msg="Hello"
    gmHandler = ()=>{
        console.log("Test Case 123")
        this.msg = "Good Morning"
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        return <div>
                <h2>Message Component</h2>
                <hr />
                <h2>Message Value:{this.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button>GN</button>
        </div>
    }
}

export default Message