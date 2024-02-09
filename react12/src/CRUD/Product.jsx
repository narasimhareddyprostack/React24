import React from 'react'
import Axios from 'axios'
const Product = () => {
    let [products,setProducts]=React.useState([])
    React.useEffect(()=>{
        Axios.get('http://127.0.0.1:5000/api/products')
        .then((resp)=>{
            setProducts(resp.data)
        })
        .catch()
    },[])
  return <>
    <div className="container">
        <div className="row">
            {
                products.length > 0 ?  <>
                    {
                        products.map((product)=>{
                            return <div className='col-md-3'>
                                <div className="card">
                                    <div className="card-header">
                                        
                                    </div>
                                    <div className="card-body">
                                      <ul className='list-group'>
                                        <li className='list-group-item'>{product.name}</li>
                                        <li className='list-group-item'>{product.price}</li>
                                        <li className='list-group-item'>{product.qty}</li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        })


                    }
                
                </> : <h4>No Data</h4>
            }
        </div>
    </div>
  
  </>
}

export default Product