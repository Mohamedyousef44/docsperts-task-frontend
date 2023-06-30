import React, { useState } from 'react'
import FormComponent from './Form'
import auth from '../utils/AuthInterceptor'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [errors , setErrors] = useState({})

    const handleSubmit = (values)=>{
        auth.post('register/' , values)
        .catch((error)=>{
          if (error.response.status === 400){
            setErrors(error.response.data.errors)
          }
        })
    }

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center">
        <h2 className='mb-4'>Sign Up</h2>
        {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {Object.entries(errors).map(([field, messages]) =>
              messages.map((message, index) => (
                <li key={`${field}-${index}`}>{message}</li>
              ))
            )}
          </ul>
        </div>
      )}
        <div className="col-12 col-md-6">
            <FormComponent showName={true} btnTitle='Sign Up' onSubmit={handleSubmit} />
        </div>
        <Link to='/login' >Have an account</Link>
    </div>
  )
}
