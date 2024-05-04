"use client";
  import React, { useState, useEffect } from 'react';
  import Link from 'next/link';
  import Image from 'next/image';
  import logo from "@/public/logo.png";
  
  const taglines = [
    "Local ah...", "Customize ah...", "Budget ah...", "Easy ah...", "Fun ah...", "Relax ah...", "Adventure ah..."
  ];
  
  const WelcomePage: React.FC = () => {
    const [taglineIndex, setTaglineIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
      }, 500); // Rotate taglines every 3 seconds
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="p-4">
          <Image src={logo} alt="Travela Logo" width={240} height={240} />
        </div>
        <div className="tagline-container">
          <div className="tagline-main">
            <div className="text-orange-500 mr-2">
              Travel</div> 
          <div className="second-word rounded-sm">{taglines[taglineIndex]}</div>
          </div>
          <div className="remaining-part text-orange-500">Pogalaa...</div>
        </div>
        <div className="w-full max-w-xs mt-8">
          <Link href="/login"className="block w-full text-center text-white py-3 rounded-full mb-4 shadow-lg bg-orange-500 hover:bg-orange-600 transition ease-in-out">
              Login to Start with Travela
          </Link>
          <Link href="/signup" className="block w-full text-center text-white py-3 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 transition ease-in-out">
              New to Travela? Register Here
          </Link>
        </div>
      </div>
    );
  };
  
  export default WelcomePage;
