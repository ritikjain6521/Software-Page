"use client";
import React, {  useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const Responsive = () => {

     const [showNav, setShowNav] = useState(false);
     const openNavHandler = () => setShowNav(true);

     const colseNavHandler = () => setShowNav(false);
  return (
    <div>
        <Nav openNav={openNavHandler}/>
      <MobileNav showNav= {showNav} closeNav={colseNavHandler}/> 

    </div>
  )
}

export default Responsive   