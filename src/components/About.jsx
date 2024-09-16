import React, { useEffect, useState } from 'react';
import aboutpng from '../assets/about.png';

const AboutUs = () => {
  const [isVisibleText, setIsVisibleText] = useState(false);
  const [isVisibleImage, setIsVisibleImage] = useState(false);
  const [isVisibleCards, setIsVisibleCards] = useState(false);
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const textSection = document.getElementById('about-text');
      const imageSection = document.getElementById('about-image');
      const cardsSection = document.getElementById('about-cards');
      const cardElements = Array.from(document.querySelectorAll('.about-card'));

      const textTop = textSection.getBoundingClientRect().top;
      const imageTop = imageSection.getBoundingClientRect().top;
      const cardsTop = cardsSection.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      if (textTop < windowHeight - 100) {
        setIsVisibleText(true);
      } else {
        setIsVisibleText(false);
      }

      if (imageTop < windowHeight - 100) {
        setIsVisibleImage(true);
      } else {
        setIsVisibleImage(false);
      }

      if (cardsTop < windowHeight - 100) {
        setIsVisibleCards(true);
        cardElements.forEach((card, index) => {
          const cardTop = card.getBoundingClientRect().top;
          if (cardTop < windowHeight - 100) {
            setVisibleCards((prevVisibleCards) => {
              const newVisibleCards = [...prevVisibleCards];
              newVisibleCards[index] = true;
              return newVisibleCards;
            });
          }
        });
      } else {
        setIsVisibleCards(false);
        setVisibleCards([false, false, false, false]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center py-16 px-6 bg-gray-100 text-gray-800"
    >
      <div
        id="about-text"
        className={`text-4xl font-extrabold mb-6 text-center transition-transform duration-1000 ${
          isVisibleText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        About Us
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        <div
          id="about-image"
          className={`w-full md:w-1/2 flex justify-center transition-transform duration-1000 ${
            isVisibleImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="p-4 border-4 border-indigo-500 rounded-lg shadow-xl bg-white">
            <img
              src={aboutpng}
              alt="About Us"
              className="w-full object-cover rounded-lg"
              style={{ maxHeight: '500px', maxWidth: '700px' }}
            />
          </div>
        </div>

        <div
          id="about-cards"
          className={`w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 transition-transform duration-1000 ${
            isVisibleCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div
              className={`about-card bg-purple-100 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all ease-out duration-200 relative ${
                visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Who We Are</h3>
              <p>
                The <span className="font-bold text-blue-500">Microsoft Learning Club (MLSC)</span> is a vibrant community dedicated to fostering learning and growth in technology and innovation. We offer a range of activities including workshops, seminars, and networking events.
              </p>
            </div>

            <div
              className={`about-card bg-green-100 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all ease-out duration-200 relative ${
                visibleCards[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-green-700">Our Mission</h3>
              <p>
                Our <span className="font-bold text-green-500">mission</span> is to provide a platform for learning and collaboration, encouraging members to stay updated with the latest technological trends and advancements.
              </p>
            </div>

            <div
              className={`about-card bg-blue-200 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all ease-out duration-200 relative ${
                visibleCards[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Our Vision</h3>
              <p>
                We envision a <span className="font-bold text-blue-500">community</span> where technology enthusiasts can collaborate, innovate, and inspire each other to achieve personal and professional growth.
              </p>
            </div>

            <div
              className={`about-card bg-yellow-100 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all ease-out duration-200 relative ${
                visibleCards[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">Get Involved</h3>
              <p>
                Join us to <span className="font-bold text-yellow-500">participate</span> in exciting events, connect with experts, and enhance your skills. Be part of a community that's passionate about technology and learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
