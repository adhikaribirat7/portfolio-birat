import { useState } from "react"; // Not used currently, can be removed if not needed
import "./App.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import AboutMe from "./aboutMe/AboutMe";
import ContactMe from "./contactMe/ContactMe";
import Footer from "./footer/Footer";
import Projects from "./projects/Project";
import Skills from "./skills/Skills";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
}

export default App;
