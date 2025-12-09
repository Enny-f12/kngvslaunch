'use client';
import React from 'react';
import Link from 'next/link';

// NOTE: Using placeholder colors: 'zinc-900' (dark) and 'teal-500/700' (accent).
// Adjust these classes in your tailwind.config.js to match your design variables.

const GalleryLinks: React.FC = () => {
  return (
    // Enhanced Background and Padding
    <div className="scroll-smooth w-full pt-12 pb-20 px-4 md:px-10 bg-gray-50">
      
      {/* Content Container */}
      <div className="w-full max-w-5xl mx-auto text-center">

        {/* Title Section */}
        <div className="mb-16 mt-10 md:mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-green-600  pb-1">Visual Journey</span>
          </h2>
          <p className="text-xl mt-4 text-green-700 font-semibold">Moments Captured Over The Years</p>
        </div>

        {/* --- Intro Text Section (More Detail) --- */}
        <div className="text-left max-w-4xl mx-auto space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to the official gallery archive! This space is dedicated to showcasing the vibrant history, 
            successful projects, and joyful moments captured throughout our years of operation. Each album is a 
            snapshot of our commitment and growth, reflecting the hard work and passion of everyone involved.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We&#39;ve carefully curated these collections to provide a comprehensive look at our journey, from early 
            beginnings to recent achievements. You&#39;ll find pictures of key events, community collaborations, 
            and the lasting impact of our initiatives.
          </p>
          
          <div className="mt-10 py-4 border-t border-b border-teal-200">
             <p className="text-green-800 text-xl font-semibold italic">
                Ready to relive the memories? Select a year below to explore the visual history.
             </p>
          </div>
        </div>
        
        {/* Year Links - Stylized like the World Food Day component */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mt-16 mb-10 flex-wrap">
          
          <Link 
            href="/gallery/galleryone"
            className="
              inline-flex justify-center items-center h-20 w-full sm:w-60 md:w-72 
              bg-white text-green-600 font-extrabold text-2xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-600 hover:text-white
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2021
          </Link>
          
          <Link 
            href="/gallery/gallerytwo"
            className="
              inline-flex justify-center items-center h-20 w-full sm:w-60 md:w-72 
              bg-white text-green-700 font-extrabold text-2xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-600 hover:text-white
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2022
          </Link>
          
          <Link 
            href="/gallery/gallerythree"
            className="
              inline-flex justify-center items-center h-20 w-full sm:w-60 md:w-72 
              bg-white text-green-600 font-extrabold text-2xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-700 hover:text-white
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2023
          </Link>
          
          <Link 
            href="/gallery/galleryfour"
            className="
              inline-flex justify-center items-center h-20 w-full sm:w-60 md:w-72 
              bg-white text-green-600 font-extrabold text-2xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-700 hover:text-white
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2024
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default GalleryLinks;