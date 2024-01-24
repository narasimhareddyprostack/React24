import React from 'react'
class Reg extends React.Component{
    state={
        uname:"",
        email:"",
        mobile:""
    }

    updateHandler = (event)=>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return <div className='mt-5'>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                    <label >User Name:</label>
                    <input type="text" onChange={this.updateHandler} name="uname" />  <br /> <br />
                    <label >Email Id::::::::</label>
                    <input type="text" onChange={this.updateHandler} name="email" /> <br /> <br />
                    <label >Mobile::::::::::</label>
                    <input type="text" onChange={this.updateHandler} name="mobile" /> <br /><br />
                    <input type="submit" value="Registration" />
            </form>
        </div>
    }

}

export default Reg