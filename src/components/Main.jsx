import React from 'react'
import Header from './Header';
import Home from './Home';
import About from './About';
import Team from './Team';
import Events from './Events';
import ContactUs from './Contact';
import Footer from './footer';

const main = () => {
  return (
    <div className='bg-gray-100'>
        <Header />
        <Home />
        <About />
        <Team />
        <Events />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default main