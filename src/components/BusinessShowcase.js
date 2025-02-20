import React from "react";
import img1 from "../images/micro365.avif";
import img2 from "../images/Microsoft-Teams.avif";
import img3 from "../images/cloudPC.avif";
import img4 from "../images/Visual-studio.avif";

const businessProducts = [
  {
    img: img1,
    title: "Microsoft 365 Copilot",
    description:
      "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    img: img2,
    title: "Get Microsoft Teams for your business",
    description:
      "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.",
    buttonText: "Find the right plan for your business",
    buttonLink: "#",
  },
  {
    img: img3,
    title: "Welcome to your Windows 365 Cloud PC",
    description:
      "Securely stream your Windows experience from the Microsoft cloud to any device.",
    buttonText: "Get it today",
    buttonLink: "#",
  },
  {
    img: img4,
    title: "Visual Studio 2022",
    description:
      "Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.",
    buttonText: "Download Visual Studio 2022",
    buttonLink: "#",
  },
];

const BusinessShowcase = () => {
  return (
    <section className="px-4 py-10 md:px-10 lg:px-16">
      <h2 className="text-2xl font-bold text-center dark:text-white">
        For Business
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {businessProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col h-full 
                      transition-transform duration-300 hover:scale-105 hover:shadow-xl 
                      dark:bg-gray-800 dark:text-white"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow text-sm">
                {product.description}
              </p>
            </div>
            <a
              href={product.buttonLink}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center 
                         transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              {product.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessShowcase;
