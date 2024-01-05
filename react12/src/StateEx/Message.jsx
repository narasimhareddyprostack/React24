import React from 'react'
class Message extends React.Component{

    //msg="Hello"
    state = {
        msg:"Hello"
    }
    gmHandler = ()=>{
       this.setState({ msg:"Good afternoon............" })
    }
    gnHandler = ()=>{
        this.setState({msg:'Good Night'})
    }
    render(){
        return <div>
                <h2>Message Component</h2>
                <hr />
                <pre>{JSON.stringify(this.state)}</pre>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message