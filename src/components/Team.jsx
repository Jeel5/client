import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import teamMembers from '../data/TeamData.jsx';

const cardWidth = 'w-full sm:w-[40vw] md:w-[26vw]';

const Team = () => {
  const lastRowStartIndex = Math.floor((teamMembers.length - 2) / 3) * 3 + 2;

  return (
    <section id="team" className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-indigo-600">Meet the Team</h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center mb-8 gap-8">
          {teamMembers.slice(0, 2).map((member, index) => (
            <TeamCard key={index} member={member} index={index} cardWidth={cardWidth} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.slice(2, lastRowStartIndex).map((member, index) => (
            <TeamCard key={index + 2} member={member} index={index + 2} cardWidth={cardWidth} />
          ))}
        </div>

        {teamMembers.length > lastRowStartIndex && (
          <div className="flex flex-col sm:flex-row justify-center mt-8 gap-8">
            {teamMembers.slice(lastRowStartIndex).map((member, index) => (
              <TeamCard key={lastRowStartIndex + index} member={member} index={lastRowStartIndex + index} cardWidth={cardWidth} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const TeamCard = ({ member, index, cardWidth }) => {
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
      <div className={`relative ${cardWidth} bg-white rounded-lg shadow-lg overflow-hidden group mx-auto`}>
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative p-4 text-center bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-2 text-indigo-800 group-hover:text-indigo-600 transition-colors duration-300">{member.name}</h3>
          <p className="text-gray-600 text-lg group-hover:text-indigo-400 transition-colors duration-300">{member.title}</p>

          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={`mailto:${member.email}`}
              className="text-white text-3xl bg-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform group-hover:translate-y-0 translate-y-6"
            >
              <FaEnvelope />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl bg-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform group-hover:translate-y-0 translate-y-6"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
