import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HomeImg from "../assets/Home.png";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={HomeImg}
        title="Connecting students and teachers"
        text="let's see how we can bring magic in your educational journey!"    
        url="/"
        btnClass="show"
      />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
