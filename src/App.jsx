import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import MouseCursor from "./components/MouseCursor";

function App() {

  return (
    < >
      <header>
        <Navbar />
      </header>
      <main className="relative">
        <Hero />
        <MouseCursor />
      </main>
    </>
  );
}

export default App;    
