import React,{useState,useEffect} from 'react'

import Axios from 'axios'

const User = () => {
  let [users,setUsers]=useState([])
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setUsers(response.data)
    })
    .catch(()=>{

    })
  },[])
  return (
    <div className='container'>
      <pre>{JSON.stringify(users)}</pre>
        <h1>User Component</h1>
        <div className="row">
          <div className="col-md-8">
          

          {
            users.length > 0 ?  <>   <table className='table'>      
              <thead className='bg-dark text-white'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user)=>{
                    return <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>  </>: <h1>No Datat</h1>
          }   
         
          </div>
        </div>
        
    </div>
  )
}

export default User