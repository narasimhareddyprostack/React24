import {useState} from 'react'
const Product = () => {
  let [product,setProduct]=useState({
    product_Name:'Apple Iphone 14',
    price:57999,
    image:'https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=90',
    qty:2
  })

  /* let decrHandler = ()=>{
    setProduct({})
  } */
  let incrHandler=()=>{
    setProduct({ ...product, qty:product.qty +1})
  }
  return (
    <div className='container'>
        <pre>{JSON.stringify(product)}</pre>

      <div className="row"></div>
        <div className="col-8">
          <table className='table'>
            <thead className='bg-primary text-white'>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.product_Name}</td>
                <td><img src={product.image} width="50px" alt="" /></td>
                <td>{product.price}</td>
                <td> <i onClick={()=>{
                  setProduct({...product,qty:product.qty -1})

                }} className='fa fa-minus-circle'></i> {product.qty}  <i onClick={incrHandler} className='fa fa-plus-circle'></i></td>
                <td>{product.qty * product.price}</td>
              </tr>
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default Product