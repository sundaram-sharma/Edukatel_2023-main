import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareersComponent from '../components/Careers/CareersComponent'
import Hero from "../components/Hero";
import CareersImg from "../assets/Careers.png";


function Careers() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={CareersImg}
        title=""
        btnClass="hide"
      />
    <CareersComponent/>
    <Footer />
    </>
  )
}

export default Careers