import React from "react";
import img from '../images/Highlight-PC.avif'; // Your card image

const OrganizeLifeSection = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-center">
      {/* Card Container */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-auto">
        
        {/* Card Image */}
        <img
          src={img}
          alt="Organize your life"
          className="w-full h-[300px] md:h-full object-cover"
        />

        {/* Overlay for Desktop */}
        <div className="hidden md:block absolute inset-0 "></div>

        {/* Content for Desktop (Right Side) */}
        <div className="absolute inset-0 hidden md:flex items-center justify-end text-white p-6 md:p-12 pr-12">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Organise your life</h2>
            <p className="mt-3 text-lg text-gray-300">
              Keep your ideas and notes organised with OneNote.
            </p>
            <a
              href="#"
              className="mt-5 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Content Below Image for Mobile */}
      <div className="md:hidden p-6 text-center text-black">
        <h2 className="text-3xl font-bold">Organise your life</h2>
        <p className="mt-3 text-lg text-gray-700">
          Keep your ideas and notes organised with OneNote.
        </p>
        <a
          href="#"
          className="mt-5 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default OrganizeLifeSection;
