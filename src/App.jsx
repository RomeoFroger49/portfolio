import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import MouseCursor from "./components/MouseCursor";
import SectionTexte from "./components/SectionTexte";
import Me from "./components/AboutComponent/Me";
import ButtonUp from "./components/ButtonUp";
import ProjectDisplay from "./components/ProjectDisplay/ProjectDisplay";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative ">
        <Hero />
        <SectionTexte />
        <Me />
        <ProjectDisplay />
        <Footer />
        <MouseCursor />
        <ButtonUp />
      </main>
    </>
  );
}

export default App;
