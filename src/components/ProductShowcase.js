import React from "react";
import img1 from "../images/gldn-CP-Windows11-GlobalLaunch.jpeg";
import img2 from "../images/Edge.webp";
import img3 from "../images/OneDrive.webp";
import img4 from "../images/gldn-CP-MSCOM-Outlook-iOS-Android.avif";

const products = [
  {
    img: img1,
    title: "Designed for life today – and tomorrow",
    description:
      "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
    buttonText: "See if your PC is ready",
    buttonLink: "#",
  },
  {
    img: img2,
    title: "Microsoft Edge",
    description:
      "World-class performance with more privacy, more productivity, and more value while you browse.",
    buttonText: "Download now",
    buttonLink: "#",
  },
  {
    img: img3,
    title: "Microsoft OneDrive",
    description:
      "Save your files and photos to OneDrive and access them from any device, anywhere.",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    img: img4,
    title: "Outlook for iOS and Android",
    description: "Connect. Organize. Get things done.",
    buttonText: "Download now",
    buttonLink: "#",
  },
];

const ProductShowcase = () => {
  return (
    <section className="px-4 py-10 md:px-10 lg:px-16">
      <h2 className="text-2xl font-bold text-center dark:text-white">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col h-full 
                      dark:border-gray-700 dark:bg-gray-800 
                      hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-semibold text-lg dark:text-white">
                {product.title}
              </h3>
              <p className="text-gray-600 mt-2 flex-grow dark:text-gray-300 text-sm">
                {product.description}
              </p>
            </div>
            <a
              href={product.buttonLink}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center 
                         transform transition duration-300 ease-in-out 
                         hover:scale-105 hover:bg-blue-700 
                         dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              {product.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
