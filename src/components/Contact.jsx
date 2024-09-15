import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-12">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-indigo-500 text-2xl mr-3" />
                <p className="text-gray-600">BVM, Vidyanagar, Anand, Gujrat, India</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-indigo-500 text-2xl mr-3" />
                <p className="text-gray-600">+91 72020 45251</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-500 text-2xl mr-3" />
                <p className="text-gray-600">mlsc123@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <form action="#" method="POST" className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="message" className="text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="p-3 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
