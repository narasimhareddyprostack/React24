import React, { Component } from 'react'

 class Salary extends Component {
    state={
        salary:50000
    }
    updateSalaryHandler=(value)=>{
        this.setState({
            salary:value
        })
    }
    render() {
    return (
      <div>
        <h3>Salary Componeont</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Employee Salary:{this.state.salary}</h3>
        <button onClick={this.updateSalaryHandler.bind(this,100000)}>Hike 50k</button>
        <button onClick={this.updateSalaryHandler.bind(this,150000)}>Hike 100k</button>
        <button onClick={this.updateSalaryHandler.bind(this,1)}>Hike 1Rupeee</button>
      </div>
    )
  }
}

export default Salary