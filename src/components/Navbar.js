import React, { useState, useEffect } from "react";
import {
    FaBars, FaSearch, FaShoppingCart, FaUser,
    FaChevronDown, FaChevronUp, FaTimes, FaMoon, FaSun
} from "react-icons/fa";
import logo from '../images/micro.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";  // Read theme from localStorage
    });

    useEffect(() => {
        // Add or remove dark mode class to the document root element
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");  // Save theme to localStorage
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");  // Save theme to localStorage
        }
    }, [darkMode]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);  // Toggle category menu
    };

    // Categories data
    const categories = [
        { title: "Software", items: ["Windows Apps", "AI", "OneDrive", "Outlook", "Skype", "OneNote", "Microsoft Teams"] },
        { title: "PCs & Devices", items: ["Shop Xbox", "Accessories"] },
        { title: "Entertainment", items: ["Xbox games", "PC games", "Windows digital games"] },
        { title: "Business", items: ["Microsoft Cloud", "Microsoft Security", "Azure", "Dynamics 365", "Microsoft 365 for business"] },
        { title: "Developer & IT", items: ["Microsoft Developer", "Documentation", "Microsoft Learn", "Visual Studio"] },
        { title: "Other", items: ["Free downloads & security", "Education", "Gift cards"] },
    ];

    return (
        <nav className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <img src={logo} alt="Microsoft Logo" className="w-24 h-auto object-contain" />
                    <ul className="hidden md:flex space-x-6 items-center">
                        {["Microsoft 365", "Office", "Copilot", "Windows", "Support"].map((item) => (
                            <li key={item} className="hover:text-blue-600 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Dropdown Menu for "All Microsoft" */}
                    <div className="relative hidden md:block">
                        <button onClick={toggleDropdown} className="hover:text-blue-600 cursor-pointer flex items-center">
                            All Microsoft <FaChevronDown className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 p-4 grid grid-cols-3 gap-6 w-[750px]">
                                {categories.map((category) => (
                                    <div key={category.title}>
                                        <h4 className="font-bold">{category.title}</h4>
                                        <ul className="mt-2 space-y-1">
                                            {category.items.map((item) => (
                                                <li key={item} className="hover:text-blue-600 cursor-pointer">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <FaSearch className="cursor-pointer" />
                    <FaShoppingCart className="cursor-pointer" />
                    <FaUser className="cursor-pointer" />

                    {/* Dark Mode Toggle Button */}
                    <button onClick={toggleDarkMode} className="text-2xl">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    {/* Mobile Menu Icon */}
                    <button className="md:hidden text-2xl" onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white dark:bg-gray-800 p-4 shadow-lg overflow-auto">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
                        <FaTimes />
                    </button>
                    <div className="flex justify-center my-4">
                        <img src={logo} alt="Microsoft Logo" className="h-8" />
                    </div>
                    <ul className="space-y-4 text-left pl-4">
                        {["Microsoft 365", "Office", "Copilot", "Windows", "Support"].map((item) => (
                            <li key={item} className="py-2 border-b border-gray-200 dark:border-gray-700 cursor-pointer">
                                {item}
                            </li>
                        ))}
                        <li className="py-2 border-b border-gray-200 dark:border-gray-700 font-bold">
                            All Microsoft
                        </li>
                        {categories.map((category) => (
                            <li key={category.title} className="py-2 border-b border-gray-200 dark:border-gray-700">
                                <button onClick={() => toggleCategory(category.title)} className="flex justify-between w-full">
                                    {category.title} {openCategory === category.title ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {openCategory === category.title && (
                                    <ul className="mt-2 pl-4 space-y-1">
                                        {category.items.map((item) => (
                                            <li key={item} className="hover:text-blue-600 cursor-pointer">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
