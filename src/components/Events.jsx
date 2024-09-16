import React, { useState, useEffect, useRef } from 'react';
import events from '../data/EventData.jsx';
import upEvents from '../data/UpcomingEvent.jsx';

const Event = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const eventRefs = useRef([]);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleEvents = [];
      eventRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            newVisibleEvents.push(index);
          }
        }
      });
      setVisibleEvents(newVisibleEvents);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  return (
    <section id="events" className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600">Our Events</h2>
        <p className="text-gray-600 mt-2">Discover the latest happenings and upcoming events.</p>
        <div className="mt-6 mb-12 w-24 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <div id="upcoming-events" className="mb-16">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {upEvents.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="relative w-full sm:w-80 h-80 p-4 group"
            >
              <div className="absolute left-7 top-8 w-72 h-80 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-xl"></div>

              <div className="relative z-10 w-full h-80 bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between transform transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    onClick={() => setPopupImage(event.image)}
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="text-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <p className="text-gray-500">Date: {event.date}</p>
                </div>

                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800">Recent Events</h2>
          <a href="#all-events" className="text-blue-500 hover:underline">View All</a>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>

          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (eventRefs.current[index] = el)}
              className={`relative flex flex-col sm:flex-row items-center mb-16 transition-opacity duration-500 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} ${
                visibleEvents.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '200px' }}
            >
              <div
                className={`flex-shrink-0 w-full sm:w-2/5 mb-6 sm:mb-0 ${index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}
              >
                <img
                  src={event.photo}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div
                className={`absolute w-8 h-8 bg-blue-500 rounded-full border-4 border-white ${index % 2 === 0 ? 'left-1/2 ml-5' : 'right-1/2 mr-5'} hidden sm:block`}
              ></div>

              <div className={`flex-grow w-full sm:w-2/5 ${index % 2 === 0 ? 'sm:ml-40' : 'sm:mr-40'}`}>
                <div className="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClosePopup}
        >
          <div className="relative">
            <img
              src={popupImage}
              alt="Popup"
              className="max-w-2xl max-h-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Event;
