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

            <div className="container">
             <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">
                                <h3>Registration Page</h3>
                            </div>
                            <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                            <div className='form-group'>
                                <label >User Name:</label>
                                 <input className='form-control' type="text" onChange={this.updateHandler} name="uname" /> 
                            </div>
                           <div className='form-group'>
                            <label >Email Id</label>
                            <input className='form-control' type="text" onChange={this.updateHandler} name="email" />
                           </div>
                            
                           <div className='form-group'>
                            <label >Mobile</label>
                            <input className='form-control' type="text" onChange={this.updateHandler} name="mobile" /> 
                           </div>
                            <input type="submit" value="Registration" className='btn btn-warning'/>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
           
        </div>
    }

}

export default Reg