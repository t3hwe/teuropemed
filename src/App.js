import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Etapes from "./Components/Etapes";
import Packs from "./Components/Packs";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Etapes />
      <Packs />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;