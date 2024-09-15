import React from 'react';
import { useInView } from 'react-intersection-observer';
import teamMembers from '../data/TeamData.jsx';

const Team = () => {
  return (
    <section id="team" className="py-16 px-6 bg-gray-100">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-indigo-600">Meet the Team</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ease-out transform ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden group">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative p-4 text-center bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-2 text-indigo-800 group-hover:text-indigo-600 transition-colors duration-300">{member.name}</h3>
          <p className="text-gray-600 text-lg group-hover:text-indigo-400 transition-colors duration-300">{member.title}</p>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
