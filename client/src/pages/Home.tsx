import { SyntheticEvent, useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SupportSport from "../components/SupportSport/SupportSport";
import NavbarSecundary from "../components/NavbarSecundary/NavbarSecundary";
import FirstView from "../components/FirstView/FirstView";
import MiMovement from "../components/MiMovement/MiMovement";
import Cart from "../components/Cart/Cart";
import { AppStore } from "../app/store";
import { useSelector } from "react-redux";

const Home = () => {
  const [width, setWhidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const { logged } = useSelector((store: AppStore) => store.auth);

  const viewWindow = () => {
    setWhidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", viewWindow);
  }, []);

  return (
    <div className="w-full h-screen">
      <Navbar width={width} setWidth={setWhidth} setIsOpen={setIsOpen} />
      {width >= 768 && <NavbarSecundary width={width} />}
      <FirstView />
      {logged && <Cart isOpen={isOpen} setIsOpen={setIsOpen} />}
      <SupportSport />
      <MiMovement />
      <Footer />
    </div>
  );
};

export default Home;
