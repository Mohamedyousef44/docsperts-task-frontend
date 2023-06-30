import React , {useEffect, useState} from 'react'
import PageForm from './PageForm'
import api from '../../utils/ApiInterceptor';
import { useParams } from 'react-router-dom'

export default function EditPage() {
    const [errors , setErrors] = useState({})
    const [page , setPage] = useState()
    const {id , pk} = useParams()
    useEffect(()=>{
        api.get(`book/${id}/page/${pk}/`)
        .then((response)=>{
            console.log(response.data.data)
            const {page_number , content } = response.data.data
            const data = {page_number , content} 
            setPage(data)
        })
    } ,[])

    const handleSubmit = (values)=>{
        console.log(values)
        api.put(`book/${id}/page/${pk}/`, values)
        .catch((error)=>{
          if (error.response.status === 400){
              console.log(error.response.data.errors)
            setErrors(error.response.data.errors)
          }
        })
    }

    return (
        <div className="container d-flex flex-column justify-content-between align-items-center">
            <h2 className='mb-4'>Update Page</h2>
    
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
                <PageForm onSubmit={handleSubmit} initValues={page} />
            </div>
        </div>
      )
}
