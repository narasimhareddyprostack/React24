import React from 'react'

const Details = (props) => {
  return (
    <div>
      {/*   <h1>Details Component</h1> */}
        <pre>{JSON.stringify(props)}</pre>
        <div className="card">
          <div className="card-header">
            <img src={props.selContact.picture.medium} alt="" />
          </div>
          <div className="card-body">
            <ul className='list-group'>
              <li className='list-group-item'>  {props.selContact.gender} </li>
              <li className='list-group-item'>  {props.selContact.dob.age} </li>
              <li className='list-group-item'>  {props.selContact.dob.age} </li>
              <li className='list-group-item'>  {props.selContact.dob.age} </li>
              <li className='list-group-item'>  {props.selContact.dob.age} </li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Details