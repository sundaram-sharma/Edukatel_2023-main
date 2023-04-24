import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from "../components/Hero";
import FAQImg from "../assets/FAQ.png";
import FaqComponent from '../components/FAQ/FaqComponent';


function Faq() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={FAQImg}
        title=""
        btnClass="hide"
      />
      <FaqComponent/>
    <Footer/>
    </>
  )
}

export default Faq