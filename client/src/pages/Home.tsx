import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NavbarSecundary from '../components/NavbarSecundary/NavbarSecundary';

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavbarSecundary/>
        <Footer />
    </div>
  )
}

export default Home