import React from "react";
import Hero from "../components/LandingPage/Hero";
import Overview from "../components/LandingPage/Overview";
import WhyChoose from "../components/LandingPage/WhyChoose";
import Room from "../components/LandingPage/Room";
import Enquiry from "../components/LandingPage/Enquiry";

function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Overview />
      <WhyChoose />
      <Room />
      <Enquiry />
    </div>
  );
}

export default LandingPage;
