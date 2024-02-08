import React from 'react'
import {gmAction,gnAction,gaAction} from '../redux/message/message.action'
import {useDispatch,useSelector} from 'react-redux'
const Message = () => {
  let dispatch =useDispatch()
  let message = useSelector((state)=>{
    return state
  })

  let gmHandler = ()=>{
    //dispatch gmaction
    dispatch(gmAction())
  }
  let gnHandler = ()=>{
    //dispatch action
    dispatch(gnAction())
  }
  return (
    <div>
      <pre>{JSON.stringify(message)}</pre>
        <h1>Message Component</h1>
        <h3>Message : {message.msg}</h3>
        <button  onClick={gmHandler}>GM</button>
        <button  onClick={()=>{dispatch(gaAction())}}>Lunch</button>
        <button onClick={gnHandler}>GN</button>

    </div>
  )
}

export default Message