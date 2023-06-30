import React , { useState } from 'react'
import api from '../../utils/ApiInterceptor';
import { Link, useParams } from 'react-router-dom'
import PageForm from './PageForm'

export default function NewPage() {
    
    const [errors , setErrors] = useState({})
    const {id} = useParams()
    const handleSubmit = (values)=>{

        console.log(values)
        api.post(`book/${id}/page/` , values)
        .catch((error)=>{
          if (error.response.status === 400){
              console.log(error.response.data)
            setErrors(error.response.data.errors)
          }
        })
    }

    return (
        <div className="container d-flex flex-column justify-content-between align-items-center">
            <h2 className='mb-4'>Create New Page</h2>
    
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
                <PageForm onSubmit={handleSubmit} />
            </div>
            
        </div>
      )
}
