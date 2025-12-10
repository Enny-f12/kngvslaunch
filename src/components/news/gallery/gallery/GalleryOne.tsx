'use client';

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Gallery2021: React.FC = () => {
  // 1. State for Lightbox/Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 2. Image Data
  const images = [
    "/assets/gallery/IMG-20210710-WA0001.jpg",
    "/assets/gallery/IMG-20210716-Creativity in our nutri-kitchen for health and enjoyment.jpg",
    "/assets/gallery/IMG_20210817_110057.jpg",
    "/assets/gallery/IMG_20210813_152448.jpg",
    "/assets/gallery/IMG_20210817_111006.jpg",
    "/assets/gallery/IMG_20210819_125306.jpg",
    "/assets/gallery/IMG_20210817_132015.jpg",
    "/assets/gallery/IMG_20210817_111641.jpg",
    "/assets/gallery/IMG_20210810_112121.jpg",
    "/assets/gallery/IMG-20210827-WA0018.jpg",
    "/assets/gallery/IMG_20210813_152650.jpg",
    "/assets/gallery/IMG_20210817_111457.jpg",
  ];
  
  // Handlers for modal
  const openImage = useCallback((src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      
      {/* --- Header and Navigation --- */}
      <div className="flex justify-between items-center mb-10 md:mb-16 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/gallery" 
          className="text-xl text-gray-700 hover:text-green-600 transition duration-300 flex items-center group"
        >
          {/* Using an icon for the back arrow */}
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Galleries</span>
        </Link>
        
        {/* Year Navigation Arrows (Top Right) */}
        <div className="flex space-x-4 text-sm md:text-base font-semibold">
          {/* Previous Year (Hypothetically 2020) */}
          <Link 
            href="/gallery/galleryzero" // Assuming /gallery/galleryzero for 2020
            className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
          >
            <FaArrowLeft className="mr-1" /> 2020
          </Link>
          
          {/* Next Year (2022) */}
          <Link 
            href="/gallery/gallerytwo" 
            className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
          >
            2022 <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>

      {/* --- Gallery Content --- */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 border-b-2 border-gray-200 pb-4">
          🎉 Gallery: The Year 2021
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-md bg-white 
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => openImage(src)} // Open modal on click
            >
              <Image 
                src={src} 
                alt={`Gallery 2021 - ${index + 1}`}
                width={500} // Tailwind uses these for aspect ratio calc, they don't strictly control display size
                height={400} 
                quality={80} // Optimize image loading
                className="w-full h-48 sm:h-64 object-cover transition duration-500 ease-in-out group-hover:opacity-80 cursor-pointer"
              />
              {/* Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-green-200 bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-bold p-2 bg-gray-400 bg-opacity-60 rounded">
                      View Full
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Full Image Modal (Lightbox) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-90 backdrop-blur-sm p-4"
          onClick={closeImage} // Close if backdrop is clicked
        >
          <div 
            className="relative max-w-full max-h-full"
            onClick={e => e.stopPropagation()} // Prevent closing when image area is clicked
          >
            {/* Close Button */}
            <button 
              onClick={closeImage}
              className="absolute top-4 right-4 z-50 text-white text-3xl p-2 rounded-full bg-gray-600 hover:bg-gray-700 transition"
            >
              <FaTimes size={18}/>
            </button>
            
            {/* Display Image */}
            <Image
              src={selectedImage}
              alt="Full view"
              layout="intrinsic" 
              width={1600}
              height={900}
              quality={100}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery2021;