import Axios  from 'axios'
import React, { useState } from 'react'

const CreateProduct = () => {
    let [product,setProduct]=useState({name:"",price:"",qty:'',info:"", image:"Test Image"})
    let updateHandler=(event)=>{
        setProduct({ ...product, [event.target.name]:event.target.value })
    }
    let submitHandler = (event)=>{
        console.log("Test Case 1")
        event.preventDefault();
        Axios.post('http://127.0.0.1:5000/api/products', product)
        .then((resp)=>{
            console.log(resp)
        })
        .catch(()=>{})
    }
  return (
    <div className='container mt-5'>
         <pre>{JSON.stringify(product)}</pre>
        <div className="row">
           
           
            <div className="col-md-4">
                 <div className="card">
                <div className="card-header">
                    <h4>Create New Product</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                            <label >Product Name:</label>
                            <input name="name" onChange={updateHandler} type="text" className='form-control'/>
                        </div>
                         <div className='form-group'>
                            <label >Price</label>
                            <input name="price" onChange={updateHandler} type="text" className='form-control'/>
                        </div>
                         <div className='form-group'>
                            <label >QTY</label>
                            <input name="qty"  onChange={updateHandler} type="text" className='form-control'/>
                        </div>
                         <div className='form-group'>
                            <label >Info:</label>
                            <input name="info" onChange={updateHandler} type="text" className='form-control'/>
                        </div>
                        <input type="submit" value="Create" className='btn btn-success' />
                    </form>
                </div>
            </div>

            </div>
        </div>
       
       
    </div>
  )
}

export default CreateProduct