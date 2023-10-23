import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import { Footer } from 'flowbite-react';
import FooterSection from './component/FooterSection';



const App = () => {
  return (
    <>
    <Navbar />
    <div className='h-screen'>
    <Outlet />
    </div>
    <FooterSection />
    </>
  )
}

export default App;