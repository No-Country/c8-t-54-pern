import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NavbarSecundary from '../components/NavbarSecundary/NavbarSecundary';
import FirstView from '../components/FirstView/FirstView';

const Home = () => {
  return (
    <>
        <Navbar />
        <NavbarSecundary/>
        <FirstView/>
        <Footer />
    </>
  )
}

export default Home