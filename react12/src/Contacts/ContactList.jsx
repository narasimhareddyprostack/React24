import React from 'react'

const ContactList = (props) => {
  return (
    <div>
        <h3>ContactList Component</h3>
        <pre>{JSON.stringify(props.contacts)}</pre>
        <table className='table'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              props.contacts.map((contact)=>{
                return <tr>
                  <td> {contact.login.uuid.substr(32)} </td>
                  <td> {contact.name.first} </td>
                  <td> {contact.email} </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ContactList