import React , {useEffect, useState} from 'react'
import BookForm from './BookForm'
import api from '../../utils/ApiInterceptor'
import { useParams } from 'react-router-dom'

export default function BookEdit() {
    const [errors , setErrors] = useState({})
    const [book , setBook] = useState()
    const {id} = useParams()
    useEffect(()=>{
        api.get(`book/${id}`)
        .then((response)=>{
            const {title , description , price } = response.data.data[0]
            const data = {title , description , price} 
            setBook(data)
        })
    } ,[])

    const handleSubmit = (values)=>{

        api.put(`book/${id}/`, values)
        .catch((error)=>{
          if (error.response.status === 400){
              console.log(error.response.data.errors)
            setErrors(error.response.data.errors)
          }
        })
    }

    return (
        <div className="container d-flex flex-column justify-content-between align-items-center">
            <h2 className='mb-4'>Update Book</h2>
    
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
                <BookForm onSubmit={handleSubmit} initValues={book} />
            </div>
        </div>
      )
}
