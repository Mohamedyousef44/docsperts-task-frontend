import React from 'react'
import { Link } from 'react-router-dom'

export default function NotAuthorized() {
  return (
    <div className='text-center'>NotAuthorized <Link to='/'>Back</Link></div>
  )
}
