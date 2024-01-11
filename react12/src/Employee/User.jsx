import React from 'react'
import Axios from 'axios'
class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            empData:{}
        }
    }
    componentDidMount(){
        Axios.get('https://dummyjson.com/users')
        .then((resp)=>{
            console.log(resp)
            console.log(resp.data)
            this.setState({empData:resp.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        let {users} =this.state.empData
        return <div className='container'>
             <pre>{JSON.stringify(this.state.empData)}</pre>
            <div className="row">
                <div className="col-8">
                {
                Object.keys(this.state.empData).length > 0 ?
                <>
                <table className='table'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    })

                    }


                    </tbody>
                </table>
                
                </> 
                : <> <h3>No Data</h3> </>
            }
                </div>
            </div>
           
        
        
        </div>
    }
}

export default User