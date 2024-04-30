// NavBar.js
import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-pink-600/70 sticky top-0 py-6 z-50 backdrop-blur-[6px]">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
                    <span className="text-white text-lg font-bold">EventName</span>
                </div>
                {/* Navigation Links (if needed) */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
