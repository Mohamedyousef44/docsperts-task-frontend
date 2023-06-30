import React from 'react'
import { Formik , Form ,Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function BookForm(props) {
    const initValues = props.initValues || {
        title:'',
        description:'',
        price:0
    }
    const handleSubmit = (values)=>{
        props.onSubmit(values)
    }

    const validationSchema = Yup.object({
        title:Yup.string().required().min(6 , 'title must be more than 6 character'),
        description:Yup.string().required().min(3 , 'description must be more than 100'),
        price:Yup.number().required()
    }) 

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {()=>( 
            <Form>
                <div className='mb-3'>
                    <label htmlFor="title" className="form-label">Book Title</label>
                    <Field className='form-control mb-4' name='title' placeholder='Title'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='title' component='span'></ErrorMessage>
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className="form-label">Book Description</label>
                    <Field className='form-control mb-4' name='description' placeholder='Description'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='description' component='span'></ErrorMessage>
                </div>
                <div className='mb-3'>
                    <label htmlFor="price" className="form-label">Book Price</label>
                    <Field type='number' className='form-control mb-4' name='price' placeholder='Price'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='price' component='span'></ErrorMessage>
                </div>
                <button type='submit' className='btn btn-dark'>Submit</button>
            </Form>
        )
        }
    </Formik>
  )
}
