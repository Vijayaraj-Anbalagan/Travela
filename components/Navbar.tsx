'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo1 from '../public/logo1.png';  // Ensure the logo path is correct

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white text-white rounded-lg"> 
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Image src={logo1} alt="Travela Logo" width={100} height={100} />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for the menu button */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state. */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="text-gray-600 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Settings</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
