import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import MouseCursor from "./components/MouseCursor";
import SectionTexte from "./components/SectionTexte";
import Me from "./components/AboutComponent/Me";
import  ButtonUp  from "./components/ButtonUp";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative ">
        <MouseCursor />
        <ButtonUp />
        <Hero />
        <SectionTexte />
        <Me />
      </main>
    </>
  );
}

export default App;
