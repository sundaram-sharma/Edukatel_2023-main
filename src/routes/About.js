import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/AboutUs.png";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title=""
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
