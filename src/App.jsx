import About from "./components/About";
import AbtOurDept from "./components/AbtOurDept";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Timeline />
      <AbtOurDept />
      <Footer />
    </>
  );
}

export default App;
