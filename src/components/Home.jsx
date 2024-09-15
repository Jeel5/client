import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 sm:mb-4 pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Welcome to the Microsoft Learning Club!
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl text-center text-gray-700 px-4 md:px-0">
        Join our community of passionate learners and explore the world of technology and innovation. Attend our events, meet our team, and enhance your skills with us!
      </p>
      <a
        href="#join"
        className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:from-purple-400 hover:to-blue-400 transition-transform transform hover:scale-105"
      >
        Join Now
      </a>
    </section>
  );
};

export default Home;
