import React from 'react'
class Login extends React.Component{
    state={
        email:"",
        password:""
    }

    emailHandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    passwordHandler=(event)=>{
        console.log(event)
        this.setState({
            password:event.target.value
        })
    }

    render(){
        return <div className='mt-5'>
            <pre>{JSON.stringify(this.state)}</pre>
          <form >
            <label>Emaild Id:</label>
            <input type="text" onChange={this.emailHandler} />  <br /><br />
            <label>Password</label>
            <input type="text" onChange={this.passwordHandler} />  <br /><br />
            <input type="submit" value="Login" />
          </form>
        </div>
    }
}


export default Login