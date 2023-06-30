import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout() {
  return (
   <>
        <NavBar />
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <Outlet />
        </div>
        <Footer />
   </>
  )
}
