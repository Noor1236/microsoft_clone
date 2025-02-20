import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaPause, FaPlay } from "react-icons/fa"; // Play/Pause Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Arrows

import bg1 from "../images/b1.avif";
import bg2 from "../images/b2.avif";

const slides = [
  {
    image: bg1,
    title: "Achieve the extraordinary",
    description:
      "Microsoft 365 delivers cloud storage, security, and Microsoft Copilot in your favorite apps - all in one plus.",
    buttonText: "Download the Copilot app",
  },
  {
    image: bg2,
    title: "Copilot is your AI companion",
    description:
      "Always by your side, ready to support you whenever and wherever you need it.",
    buttonText: "Store Microsoft 365",
  },
];

const HeroSection = () => {
  const [slider, setSlider] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 5000,
    fade: false,
    arrows: false,
    appendDots: (dots) => (
      <div className="flex items-center justify-center space-x-3 mt-4">
        {dots}
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-gray-400 dark:bg-white opacity-80 hover:opacity-100 transition-all border border-gray-600 dark:border-gray-300"></button>
    ),
    
  };


  return (
    <section className="relative w-full">
      <Slider ref={(c) => setSlider(c)} {...settings} className="w-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            <div className="w-full h-auto md:h-[600px]">
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-black dark:text-white max-w-lg w-auto text-left p-6 mx-auto md:absolute md:top-1/3 md:left-10 lg:left-20 md:max-w-md">
              <h1 className="text-2xl font-bold">{slide.title}</h1>
              <p className="text-lg mt-2">{slide.description}</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Controls */}
      <div className="w-full flex justify-center items-center mt-4 space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          {isPaused ? <FaPlay size={16} /> : <FaPause size={16} />}
        </button>

        <button
          onClick={() => slider?.slickPrev()}
          className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <IoIosArrowBack size={20} />
        </button>

        <button
          onClick={() => slider?.slickNext()}
          className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <IoIosArrowForward size={20} />
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
