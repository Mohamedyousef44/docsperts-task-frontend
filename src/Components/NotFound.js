import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='text-center'>
      <h2>Not Found Page 404</h2>
      <p>Ops We could not find what you are looking for ! <Link to='/'>go back home</Link></p>
    </div>
  )
}
