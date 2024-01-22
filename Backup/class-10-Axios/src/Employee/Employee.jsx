import React from 'react'
import Axios from 'axios'
class Employee extends React.Component{
    constructor(props){
        super()
        console.log("First constructor")
        this.state = {
            employees:[]
        }
    }
    componentDidMount(){
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((resp)=>{
        this.setState({
            employees:resp.data
        })
       })
       .catch((err)=>{
        console.log(err)
       })
    }
    render(){
            console.log("Second Render method")
                return <div>
                    <pre>{JSON.stringify(this.state.employees)}</pre>
                    <h2>Employee Component</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                 <th>Name</th>
                                <th>Email</th>
                            </tr>
                            
                        </thead>
                        <tbody>
 {
                        this.state.employees.length > 0 ? <>
                        {
                            this.state.employees.map((emp)=>{
                                return <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                </tr>
                            })
                        }
                        </> : <> <h2>No Data</h2> </>
                    }
                        </tbody>
                    </table>
                   
                </div>
        }
}
export default Employee