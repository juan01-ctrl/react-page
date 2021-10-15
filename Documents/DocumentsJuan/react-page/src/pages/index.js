import React, { useState } from 'react'
import Footer from '../components/Footer/index.js';
import HeroSection from '../components/HeroSection.js';
import {  homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data.js';
import InfoSection from '../components/InfoSection/index.js';
import Navbar from '../components/Navbar'
import Service from '../components/Services/index.js';
import Sidebar from '../components/Sidebar';
import { animateScroll as scroll } from 'react-scroll';


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const mobileMenuClick = () =>{
    setIsOpen(!isOpen)
}
const toggleHome =()=>{
    scroll.scrollToTop()
  }

    return (
        <>
           <Sidebar isOpen={isOpen} mobileMenuClick={mobileMenuClick} />
           <Navbar  mobileMenuClick={mobileMenuClick} toggleHome={toggleHome}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Service/>
            <InfoSection {...homeObjThree}/>
            <Footer toggleHome={toggleHome}/>
            
        </>
    )
}

export default Home
