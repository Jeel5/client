import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import ContactUs from './components/Contact';
import Footer from './components/footer';

const App = () => {
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
  );
};

export default App;
