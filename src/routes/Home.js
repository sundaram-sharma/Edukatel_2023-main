import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Connecting students and teachers"
        text="let's see how we can bring magic in your educational journey!"
    
        url="/"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
