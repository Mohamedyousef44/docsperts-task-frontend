import React from 'react'
import { Formik , Form ,Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function PageForm(props) {
    const initValues = props.initValues || {
        page_number:'',
        content:''
    }
    const handleSubmit = (values)=>{
 
        props.onSubmit(values)
    }

    const validationSchema = Yup.object({
        content:Yup.string().required().min(3 , 'description must be more than 100'),
        page_number:Yup.number().required()
    }) 

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {()=>( 
            <Form>
                <div className='mb-3'>
                    <label htmlFor="content" className="form-label">Page Content</label>
                    <Field  className='form-control mb-4' name='content' placeholder='Content'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='content' component='span'></ErrorMessage>
                </div>
                <div className='mb-3'>
                    <label htmlFor="page_number" className="form-label">Page Number</label>
                    <Field type='number' className='form-control mb-4' name='page_number' placeholder='Page Number'></Field>
                    <ErrorMessage className='alert alert-danger my-5 p-2' name='page_number' component='span'></ErrorMessage>
                </div>
                <button type='submit' className='btn btn-dark'>Submit</button>
            </Form>
        )
        }
    </Formik>
  )
}
