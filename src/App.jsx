import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import MouseCursor from "./components/MouseCursor";
import SectionTexte from "./components/SectionTexte";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative ">
        <MouseCursor />
        <Hero />
        <SectionTexte />
      </main>
    </>
  );
}

export default App;
