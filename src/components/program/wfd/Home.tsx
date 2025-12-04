'use client';
import React from 'react';
import Link from 'next/link';

const WorldFoodDay: React.FC = () => {
  return (
    <div className="min-h-screen px-3 md:px-10  bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-4xl mx-auto text-left">
       <div className="text-center mt-15 lg:mt-30 text-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">  World <span className="text-green-600">Food Day</span></h1>
      </div>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg mb-6">
          World Food Day, celebrated annually on October 16th, is a global event established by the
          Food and Agriculture Organization (FAO) of the United Nations in 1979. The day aims to raise
          awareness of food security, sustainable agricultural practices, and the fight against hunger
          worldwide. With themes that address critical issues such as poverty, climate change, and
          healthy eating, World Food Day unites governments, organizations, and individuals to advocate
          for actions that create a better, hunger-free world.
        </p>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg ">
          Over the years, Kids Nutri Garden has proudly participated in World Food Day, aligning its
          mission with WFD’s objectives. Through this partnership, Kids Nutri Garden has participated in
          various events and initiatives, leveraging its expertise in promoting nutrition education and
          sustainable gardening. These collaborative efforts have helped create impactful programs aimed
          at empowering communities, fostering food literacy, and supporting the global goal of achieving
          food security for all.
        </p>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg mb-6 mt-6">
          Click here to view the detailed activities and events over the years.
        </p>
      </div>

      {/* Year Links */}
      <div className="flex justify-center items-center gap-6 sm:gap-10 mt-12 mb-20 flex-wrap">
        <Link
          href="/wfd/wfdone"
          className="inline-block w-2/4 min-w-[150px] text-center py-3 px-10 rounded-full font-medium text-green-700 border border-green-700 bg-white hover:bg-green-700 hover:text-white transition-all duration-300 text-base"
        >
          2023
        </Link>
        <Link
          href="/wfd/wfdtwo"
          className="inline-block w-2/4 min-w-[150px] text-center py-3 px-10 rounded-full font-medium text-green-700 border border-green-700 bg-white hover:bg-green-700 hover:text-white transition-all duration-300 text-base"
        >
          2024
        </Link>
      </div>
    </div>
  );
};

export default WorldFoodDay;
