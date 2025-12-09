'use client';

import React from 'react';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaGlobe, FaSeedling, FaUtensils } from 'react-icons/fa'; // Icons for visual appeal

const WorldFoodDay: React.FC = () => {
  return (
    // Outer container with padding and background
    <div className="pt-12 pb-20 px-4 md:px-10 bg-gray-50 min-h-screen">
      
      {/* Content Container (Centered and Max Width) */}
      <div className="w-full max-w-5xl mx-auto text-center">

        {/* --- Title Section --- */}
        <div className="mb-16 mt-10 md:mt-16">
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            World <span className="text-green-600 ">Food Day</span>
          </h1>
          <p className="text-xl mt-4 text-green-700 font-semibold flex items-center justify-center">
             <FaGlobe className="mr-2"/> October 16th – Action for a Hunger-Free World
          </p>
        </div>

        {/* --- Intro Text Section --- */}
        <div className="text-left max-w-4xl mx-auto space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            World Food Day, celebrated annually on October 16th, is a global event established by the 
            Food and Agriculture Organization (FAO) of the United Nations in 1979. The day aims to raise 
            awareness of food security, sustainable agricultural practices, and the critical fight against 
            hunger worldwide. With themes that address vital issues like poverty, climate change, and healthy eating, 
            World Food Day unites governments, organizations, and individuals to advocate for actions that create a 
            better, hunger-free world.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Over the years, Kids Nutri Garden has proudly participated in World Food Day, aligning its 
            mission with WFD’s objectives. Through this partnership, we&#39;ve leveraged our expertise in 
            promoting nutrition education and sustainable gardening. These impactful programs empower 
            communities, foster food literacy, and actively support the global goal of achieving food security for all.
          </p>
          
          <div className="mt-10 py-4 border-t border-b border-green-200">
             <p className="text-green-800 text-xl font-semibold italic flex items-center justify-center">
                <FaUtensils className="mr-3"/> Ready to see our commitment in action? Select a year below to view the detailed activities and events.
             </p>
          </div>
        </div>

        {/* --- Year Links (Stylized Buttons) --- */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mt-16 mb-10 flex-wrap">
          
          {/* Link 2023 */}
          <Link
            href="/wfd/wfdone"
            className="
              inline-flex justify-center items-center h-16 w-full sm:w-60 md:w-72 
              bg-green-700 text-white font-extrabold text-xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-800 
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2023 Activities
          </Link>
          
         
        </div>
        
      </div>
    </div>
  );
};

export default WorldFoodDay;