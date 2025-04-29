/** @format */

import React from "react";
import HeroSection from "../../Components/slider/HeroSection";
import ChooseUs from "./ChooseUs";
import Customar from "./Customar";
import Services from "./Services";
import Teachers from "./Teachers";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />

      <ChooseUs />
      <Teachers />
      <Customar />
    </div>
  );
};

export default Home;
