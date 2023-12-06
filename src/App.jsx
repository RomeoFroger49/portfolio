import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import MouseCursor from "./components/MouseCursor";
import SectionTexte from "./components/SectionTexte";
import Me from "./components/Me";

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
        <Me />
      </main>
    </>
  );
}

export default App;
