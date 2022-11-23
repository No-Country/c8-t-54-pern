import { SyntheticEvent } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SupportSport from "../components/SupportSport/SupportSport";
import NavbarSecundary from "../components/NavbarSecundary/NavbarSecundary";
import FirstView from "../components/FirstView/FirstView";
import MiMovement from '../components/MiMovement/MiMovement';

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
      <SupportSport />
      <MiMovement />
      <Footer />
    </div>
  );
};

export default Home;
