import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <Portfolio />
        <Process />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;