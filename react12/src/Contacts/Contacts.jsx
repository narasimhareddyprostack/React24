import React from 'react'
import ContactList from './ContactList'
import Details from  './Details'
const Contacts = () => {
  return <>
    <div className="container">
      <div className="row">
        <div className="col-8">
            <ContactList/>
        </div>
        <div className="col-4">
            <Details/>
        </div>
      </div>
    </div>
  </>
}

export default Contacts