import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body className="m-10 sm:mx-16">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </body>
  );
}

export default App;    
