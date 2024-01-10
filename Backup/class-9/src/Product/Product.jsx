import React, { Component } from 'react'

class Product extends Component {
  //product_Qty = 1  
  state = {
   product:{
    name:"SAMSUNG Galaxy S22 5G (Green, 128 GB)",
    price:9999,
    image:"https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=90",
    qty:1
   },
   user:{}
  }
  incrHandler = ()=>{
    this.setState({product:{
        ...this.state.product,
        qty:this.state.product.qty +1
    }})
  }
  decrHandler =()=>{
    this.setState({ qty:this.state.product.qty -1 })
  }
  render() {
    return (
      <div>
       <div className="container mt-5">
        <pre>{JSON.stringify(this.state.product)}</pre>
        <div className="row">
            <div className="col-10">
                <table className='table'>
                    <thead className='bg-dark text-white'>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>QTY</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.product.name}</td>
                            <td>{this.state.product.price}</td>
                            <td><img src={this.state.product.image} height={"100px"} alt="" /></td>
                            <td><i onClick={this.decrHandler}  className='fa fa-minus-circle'></i>{this.state.product.qty}<i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
                            <td>{this.state.product.qty * this.state.product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       </div>
      </div>
    )
  }
}

export default Product