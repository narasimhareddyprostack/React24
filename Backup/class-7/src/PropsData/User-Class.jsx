import React from 'react'

class User extends React.Component{

    render(){
        return <div>
                <h2>User Component</h2> 
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <h3>Wish Message: {this.props.msg}</h3>
                <h3>User Name:{this.props.user.name}</h3>
                <h3>Location:{this.props.user.loc[1]}</h3>
                </div>
    }
}

export default User
