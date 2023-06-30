import React , { useState } from 'react'
import BookForm from './BookForm'
import api from '../../utils/ApiInterceptor'

export default function NewBook() {
    
    const [errors , setErrors] = useState({})

    const handleSubmit = (values)=>{

        console.log(values)
        api.post('book/' , values)
        .catch((error)=>{
          if (error.response.status === 400){
              console.log(error.response.data)
            setErrors(error.response.data.errors)
          }
        })
    }

    return (
        <div className="container d-flex flex-column justify-content-between align-items-center my-4">
            <h2 className='mb-4'>Create New Book</h2>
    
            {Object.keys(errors).length > 0 && (
                <div className="alert alert-danger">
                <ul>
                    {Object.entries(errors).map(([field, messages]) =>
                    messages.map((message, index) => (
                        <li key={`${field}-${index}`}>{field} {message}</li>
                    ))
                    )}
                </ul>
                </div>
            )}
            <div className="col-12 col-md-6">
                <BookForm onSubmit={handleSubmit} />
            </div>
        </div>
      )
}
