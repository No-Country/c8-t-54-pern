import React, { SyntheticEvent } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavbarSecundary from "../components/NavbarSecundary/NavbarSecundary";
import FirstView from "../components/FirstView/FirstView";
type PropsView = {
  description: String;
  textButton: String;
  clickButton: (e: SyntheticEvent) => void;
};

const Home = () => {
  const goLogin = (e: SyntheticEvent) => {
    console.log(e.currentTarget.tagName);
  };
  return (
    <div className="w-full h-screen">
      <Navbar />
      <NavbarSecundary />
      <FirstView
        title="NUEVOS ARRIBOS EN CAMISETAS"
        description="Nueva linea de camistas deportivas"
        textButton="EXPLORAR CAMISETAS"
        clickButton={goLogin}
      />
      <Footer />
    </div>
  );
};

export default Home;
