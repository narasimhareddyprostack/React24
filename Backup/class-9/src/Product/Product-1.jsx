import React, { Component } from 'react'

class Product extends Component {
  //product_Qty = 1  
  state = {
    qty:1
  }
  incrHandler = ()=>{
    this.setState({ qty:this.state.qty + 1})
  }
  decrHandler =()=>{
    this.setState({ qty:this.state.qty -1 })
  }
  render() {
    return (
      <div>
        <hr />
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>{this.state.qty}</h3>
        <button onClick={this.decrHandler}>DECR</button>
        <button onClick={this.incrHandler}>INCR</button>
        <h2>Product Componet</h2>
      </div>
    )
  }
}

export default Product