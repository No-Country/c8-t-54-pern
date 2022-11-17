import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NavbarSecundary from '../components/NavbarSecundary/NavbarSecundary';
import FirstView from '../components/FirstView/FirstView';

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavbarSecundary/>
        <FirstView/>
        <Footer />
    </div>
  )
}

export default Home