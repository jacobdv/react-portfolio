import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Visualizations from './components/Visualizations';
import Skills from './components/Skills';
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Visualizations />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
