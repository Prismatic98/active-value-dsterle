import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
