import React from "react";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: "What's new",
      links: ["Surface Book 3", "Surface Pro", "Microsoft Copilot", "Microsoft 365", "Explore Microsoft products", "Windows 11 apps"],
    },
    {
      title: "Microsoft Store",
      links: ["Account profile", "Download Center", "Returns", "Order tracking"],
    },
    {
      title: "Education",
      links: ["Microsoft in education", "Devices for education", "Microsoft Teams for Education", "Microsoft 365 Education", "Office Education", "Deals for students and parents", "Azure for students"],
    },
    {
      title: "Business",
      links: ["Microsoft Cloud", "Microsoft Security", "Azure", "Dynamics 365", "Microsoft 365", "Microsoft Advertising", "Microsoft 365 Copilot", "Microsoft Teams"],
    },
    {
      title: "Developer & IT",
      links: ["Microsoft Developer", "Documentation", "Microsoft Learn", "Microsoft Tech Community", "Azure Marketplace", "AppSource", "Microsoft Power Platform", "Visual Studio"],
    },
    {
      title: "Company",
      links: ["Careers", "About Microsoft", "Company news", "Privacy at Microsoft", "Investors", "Sustainability"],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 p-6 text-sm">
      {/* Social Media */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-6 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <p className="text-base font-normal">Follow Microsoft</p>
          <div className="flex space-x-3">
            <FaFacebook className="cursor-pointer text-lg hover:text-blue-500" />
            <FaXTwitter className="cursor-pointer text-lg hover:text-gray-500" />
            <FaLinkedin className="cursor-pointer text-lg hover:text-blue-700" />
          </div>
        </div>
      </div>

      {/* Footer Links - Single Column on Mobile */}
      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-y-6 py-6">
        {footerLinks.map((category) => (
          <div key={category.title} className="flex flex-col">
            <h4 className="font-normal text-base mb-2">{category.title}</h4>
            <ul className="space-y-2">
              {category.links.map((link, index) => (
                <li key={index} className="hover:text-blue-600 cursor-pointer text-sm">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-4 text-xs">
        <p>&copy; 2025 Microsoft. All rights reserved.</p>
        <div className="flex flex-wrap space-x-4 mt-2 md:mt-0">
          <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
          <span className="hover:text-blue-600 cursor-pointer">Terms of use</span>
          <span className="hover:text-blue-600 cursor-pointer">Trademarks</span>
          <span className="hover:text-blue-600 cursor-pointer">About our ads</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
