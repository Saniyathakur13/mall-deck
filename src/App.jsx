import Hero from "./components/Hero";
import Why from "./components/Why";
import Retail from "./components/Retail";
import Dining from "./components/Dining";
import Entertainment from "./components/Entertainment";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
      <Hero />
      <Stats /> 
      <Why />
      <Retail />
      <Dining />
      <Entertainment />
      <Events />
      </div>
    </>
    
  );
}

export default App;