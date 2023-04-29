import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Footer />
    </div>
  );
}

export default App;
