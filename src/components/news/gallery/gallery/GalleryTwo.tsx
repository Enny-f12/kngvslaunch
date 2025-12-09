'use client';

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Gallery2022: React.FC = () => {
  // State for Lightbox/Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Image Data for 2022
  const images: string[] = [
    "/assets/gallery/2022/1e195ee6-aa6e-4c9f-8a2f-b7161cc4af2d.jpg",
    "/assets/gallery/2022/83ecb95f-2ae3-4067-b23a-c6cd72717a8c.jpg",
    "/assets/gallery/2022/42495880-a67f-45f1-9796-97424c4402cd.jpg",
    "/assets/gallery/2022/d3dd1c93-c089-4fd7-befa-a03d75a43e18.jpg",
    "/assets/gallery/2022/3f6f8f5d-986f-49cf-abb6-012c5772e384.jpg",
    "/assets/gallery/2022/ebcabbe1-c5b4-4b12-98fd-08c4205d1edf.jpg",
    "/assets/gallery/2022/IMG-20220722-WA0051.jpg",
    "/assets/gallery/2022/IMG-20220815-WA0044.jpg",
    "/assets/gallery/2022/1ad4bac4-4594-4e45-a2a5-858ee8e63b85.jpg",
    "/assets/gallery/2022/b7f2f30a-6bbd-4f7c-9b3a-8b84a0ea7ca3.jpg",
    "/assets/gallery/2022/upload for report (4).jpg",
    "/assets/gallery/2022/upload for report.jpg",
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
          className="text-xl  text-gray-700 hover:text-green-600 transition duration-300 flex items-center group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Galleries</span>
        </Link>
        
        {/* Year Navigation Arrows (Top Right) */}
        <div className="flex space-x-4 text-sm md:text-base font-semibold">
          {/* Previous Year (2021) */}
          <Link 
            href="/gallery/galleryone" // Link to 2021
            className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
          >
            <FaArrowLeft className="mr-1" /> 2021
          </Link>
          
          {/* Next Year (2023) */}
          <Link 
            href="/gallery/gallerythree" // Link to 2023
            className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
          >
            2023 <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>

      {/* --- Gallery Content --- */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 border-b-2 border-gray-300 pb-2">
          📸 Gallery: The Year 2022
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-md bg-white 
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => openImage(src)} // Open modal on click
            >
              <Image 
                src={src} 
                alt={`2022 Gallery ${index + 1}`}
                width={500} 
                height={400} 
                quality={80} 
                className="w-full h-48 sm:h-64 object-cover transition duration-500 ease-in-out group-hover:opacity-80 cursor-pointer"
              />
              {/* Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-green-100 bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-bold p-2 bg-gray-200 bg-opacity-60 rounded">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-90 backdrop-blur-sm p-4"
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
              <FaTimes size={18} />
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

export default Gallery2022;