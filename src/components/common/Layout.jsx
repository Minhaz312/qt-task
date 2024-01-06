import React from 'react'
import Navbar from '../header/Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='bg-slate-200/30 min-h-[100%] overflow-x-hidden'>
        <div className='mx-auto px-3 w-full xl:px-0 xl:w-10/12 2xl:w-9/12'>
            <Navbar />
            {children}
        </div>
        <Footer />
    </div>
  )
}
