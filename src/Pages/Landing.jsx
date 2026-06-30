import LandingNavbar from "../components/Navbar/LandingNavbar";

import Hero from "../components/Landing/Hero";

import Stats from "../components/Landing/Stats";

import Features from "../components/Landing/Features";

import CTA from "../components/Landing/CTA";

import Footer from "../components/Landing/Footer";

function Landing() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;