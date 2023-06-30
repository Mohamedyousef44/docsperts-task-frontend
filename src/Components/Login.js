import React , { useState } from 'react'
import FormComponent from './Form'
import auth from '../utils/AuthInterceptor'
import { Link } from 'react-router-dom'

export default function Login() {

    const [errors , setErrors] = useState(null)

    const handleSubmit = (values)=>{

        const {email , password} = values
        const data = {email , password}

        auth.post('login/' , data)
        .catch((error)=>{
          if (error.response.status === 400){
              console.log(error.response.data)
            setErrors(error.response.data.error)
          }
        })
    }
  return (
    <div className="container d-flex flex-column justify-content-between align-items-center">
        <h2 className='mb-4'>Login</h2>

        {errors && (
        <div className="alert alert-danger">
          <ul>
              <li>{errors}</li>
          </ul>
        </div>
      )}
        <div className="col-12 col-md-6">
            <FormComponent showName={false} btnTitle='Log In' onSubmit={handleSubmit} />
        </div>
        <Link to='/register' >Do not have account?</Link>
    </div>
  )
}
