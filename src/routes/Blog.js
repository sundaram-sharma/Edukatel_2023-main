import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogComponent from '../components/Blog/BlogComponent'
import Hero from "../components/Hero";
import BlogImg from "../assets/Blogs.png";

function Blog() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={BlogImg}
        title=""
        btnClass="hide"
      />
    <BlogComponent/>
    <Footer />
    </>
  )
}

export default Blog