import React from 'react'
import { Formik , Form , ErrorMessage , Field } from 'formik';
import * as Yup from 'yup'

export default function FormComponent(props) {
    const initValues = {
        name: '',
        email:'',
        password:''
    }
    const handleSubmit = (values)=>{
        props.onSubmit(values)
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(10, 'Password must be more than 10').max(15, 'Password must be less than 15'),
        ...(props.showName && {
          name: Yup.string().required().max(15, 'Name must be less than 15 character'),
        }),
      });

    return (
        <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {()=>(
                <Form className='p-3 w-100'>
                    {props.showName && (
                        <>
                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label">User Name</label>
                                <Field className='form-control mb-4' name='name' placeholder='User Name'></Field>
                                <ErrorMessage className='alert alert-danger my-5 p-2' name='name' component='span'></ErrorMessage>
                            </div>
                        </>
                    )}
                    
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field className='form-control mb-4' name='email' placeholder='Email Address'></Field>
                        <ErrorMessage className='alert alert-danger my-5 p-2' name='email' component='span'></ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Email</label>
                        <Field type='password' className='form-control mb-4' name='password' placeholder='Password'></Field>
                        <ErrorMessage className='alert alert-danger my-5 p-2' name='password' component='span'></ErrorMessage>
                    </div>
                    <button className='btn btn-dark' type='submit'>{props.btnTitle || 'Sign Up'}</button>

                </Form>
            )} 
        </Formik>
    )
}
