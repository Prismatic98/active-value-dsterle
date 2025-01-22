import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
