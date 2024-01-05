import React from 'react'

function User(props){  
        return <div>
                <h2>User Component</h2> 
                <pre>{JSON.stringify(props)}</pre>
                 <hr />
                    <h3>Wish Message: {props.msg}</h3>
                    <h3>User Name:{props.user.name}</h3>
                    <h3>Location:{props.user.loc[1]}</h3>
                </div>
  
}
export default User
