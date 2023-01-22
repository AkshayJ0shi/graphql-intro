import React from 'react'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { ADD_CLIENT } from '../mutations/clientMutation'
import { GET_CLIENTS } from '../queries/clientQueries'

const AddClientModal = () => {

    const [ name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
          const { clients } = cache.readQuery({ query: GET_CLIENTS });
    
          cache.writeQuery({
            query: GET_CLIENTS,
            data: { clients: [...clients, addClient] },
          });
        },
      });

    const submitHandler = e => {
        e.preventDefault()
        
        addClient(name, email, phone)
        setName("")
        setEmail("")
        setPhone("")
    }


  return (
    <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addClientModal">
            Add Client
        </button>


        <div className="modal fade" id="addClientModal"  aria-labelledby="addClientModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addClientModalLabel">Add Client</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className='form-label'>
                                    Name
                                </label>
                                <input type="text" className='form-control' id='#name' value={name} onChange={(e)=> setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'>
                                    Email
                                </label>
                                <input type="email" className='form-control' id='#name' value={email} onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'>
                                    Phone
                                </label>
                                <input type="text" className='form-control' id='#name' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                            </div>

                            <button data-bs-dismiss="modal" className='btn btn-secondary'>Submit</button>
                        </form>
                    </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default AddClientModal