import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import AboutPages from "./pages/AboutPages";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume"; // ✅ Import resume

const App = () => {
  return (
    <>
      <Header />
      
      <div id="home">
        <About />
      </div>

      <div id="about">
        <AboutPages />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="resume"> {/* ✅ Bagian resume */}
        <Resume />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
