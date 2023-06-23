import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Work from "./components/Work";

function App() {
  const [currentSection, setCurrentSection] = useState("Home");

  return (
    <div className="App">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Home setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />
      <Work setCurrentSection={setCurrentSection} />
      <Footer />
    </div>
  );
}

export default App;
