import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Languages from "./components/Languages";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />

        <About />

        <Skills />

        <Services />

        <Languages />

        <Certificates />

        <Projects />

        <Stats />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}


export default App;