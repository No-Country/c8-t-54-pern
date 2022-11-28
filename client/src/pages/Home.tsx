import { SyntheticEvent,useState,useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SupportSport from "../components/SupportSport/SupportSport";
import NavbarSecundary from "../components/NavbarSecundary/NavbarSecundary";
import FirstView from "../components/FirstView/FirstView";
import MiMovement from '../components/MiMovement/MiMovement';

const Home = () => {
  const [width, setWhidth] = useState(window.innerWidth);

 
  const viewWindow = () => {
    setWhidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", viewWindow);
  }, [])

  return (
    <div className="w-full h-screen">
      <Navbar width={width} setWidth={setWhidth}/>
      {width >= 768&& <NavbarSecundary width={width} setWidth={setWhidth}/>}
      <FirstView />
      
      <SupportSport />
      <MiMovement />
      <Footer />
    </div>
  );
};

export default Home;
