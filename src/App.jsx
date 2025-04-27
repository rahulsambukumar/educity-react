import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title text="Our Program" content="What we offer" />
        <Programs />
        <About />
        <Title text="Gallery" content="Campus Photos" />
        <Campus />
        <Title text="TESTIMONIALS" content="What student says" />
        <Testimonials />
        <Title text="Contact Us" content="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
