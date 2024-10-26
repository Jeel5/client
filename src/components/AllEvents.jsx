import React, { useState, useEffect, useRef } from "react";
import events from "../data/EventData.jsx";
import { useNavigate } from "react-router-dom";

const AllEvents = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [popupImage, setPopupImage] = useState(null);
  const eventRefs = useRef([]);
  const navigate = useNavigate();

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600">All Events</h1>
          <button
            onClick={() => navigate("/#events")}
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <span className="mr-2">←</span> Back to Recent Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (eventRefs.current[index] = el)}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                visibleEvents.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative h-64">
                <img
                  src={event.photo}
                  alt={event.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setPopupImage(event.photo)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{event.date}</span>
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      Learn More
                    </a>
                  )}
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
          <div className="relative w-full max-w-2xl max-h-[70vh] p-4 -translate-y-20">
            <img
              src={popupImage}
              alt="Event"
              className="w-full h-auto max-w-full max-h-full rounded-lg shadow-lg object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={handleClosePopup}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
