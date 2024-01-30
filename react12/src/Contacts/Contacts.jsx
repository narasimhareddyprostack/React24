import React, { useEffect, useState } from 'react'
import ContactList from './ContactList'
import Details from  './Details'
import Axios from 'axios'
const Contacts = () => {
  let [contacts,setContacts]=useState([])
  useEffect(()=>{
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
         .then((resp)=>{
          setContacts(resp.data)
         })
         .catch(()=>{})
  },[])
  return <>
    <div className="container">
      <h3>Contacts</h3>
      <pre>{JSON.stringify(contacts)}</pre>
      <div className="row">
        <div className="col-8">
            {
              contacts.length > 0 ?  <>
               <ContactList  contacts={contacts} />
                                    </>  :<>Nod Datta</>
            }
           
        </div>
        <div className="col-4">
            <Details/>
        </div>
      </div>
    </div>
  </>
}

export default Contacts