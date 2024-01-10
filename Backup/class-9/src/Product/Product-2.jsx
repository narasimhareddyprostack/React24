import React, { Component } from 'react'

class Product extends Component {
  //product_Qty = 1  
  state = {
    name:"SAMSUNG Galaxy S22 5G (Green, 128 GB)",
    price:9999,
    image:"https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=90",
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
       <div className="container mt-5">
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
                            <td>{this.state.name}</td>
                            <td>{this.state.price}</td>
                            <td><img src={this.state.image} height={"100px"} alt="" /></td>
                            <td><i onClick={this.decrHandler}  className='fa fa-minus-circle'></i>{this.state.qty}<i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
                            <td>{this.state.qty * this.state.price}</td>
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