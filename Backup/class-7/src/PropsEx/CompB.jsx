import React from 'react'

class CompB extends React.Component{


    render(){
        return <div>
            <h3>Component B</h3>
            {/* <pre>{this.props}</pre> */}
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Name:{this.props.name}</h3>
        </div>
    }
}
export default CompB