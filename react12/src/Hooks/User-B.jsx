import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
const User = () => {
  let [users,setUsers]=useState([])

  let getDataHandler = ()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
          .then((resp)=>{
            console.log(resp)

            setUsers(resp.data)
          })
          .catch(()=>{})
  }
  return (
    <div>
      <pre>{JSON.stringify(users)}</pre>
        <h1>User Component</h1>
        
        <button onClick={getDataHandler}>Get Data</button>
    </div>
  )
}

export default User