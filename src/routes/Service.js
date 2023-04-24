import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/Services.png";
import Footer from "../components/Footer";
import Services from "../components/Services";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title=""
        btnClass="hide"
      />
      <Services/>
      <Footer />
    </>
  );
}

export default Service;
