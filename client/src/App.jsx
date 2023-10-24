import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import FooterSection from './component/FooterSection';



const App = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <FooterSection />
    </>
  )
}

export default App;