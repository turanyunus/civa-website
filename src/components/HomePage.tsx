// src/components/HomePage.tsx
import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import JoinCommunity from "./JoinCommunity";
import Partners from "./Partners";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import ThirdSection from "./Third";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Second Section */}
      <Second />
      {/* Third Section */}
      <ThirdSection />
      {/* How it works section */}
      <Fourth />
      <HowItWorks />
      {/* Partners */}
      <Partners />
      <JoinCommunity />
    </>
  );
};

export default HomePage;
