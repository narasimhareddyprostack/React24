import React from 'react'

const Message = () => {
    let [msg,setMsg]=React.useState("Hello")

    let gmHandler=()=>{
        setMsg("Good Morning")
    }
  return (
    <div>
        <h2>Message Comp</h2>
        <h3>Messaage Value:{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={()=>{setMsg("Good Night")}}>GN</button>
    </div>
  )
}

export default Message