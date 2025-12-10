'use client';

import React from 'react';
import Link from 'next/link';
import { FaBookOpen, FaChartLine } from 'react-icons/fa'; // Icons for visual appeal

const ReportLinks: React.FC = () => {
  return (
    // Outer container with padding and background
    <div className="pt-12 pb-20 px-4 md:px-10 bg-gray-50 min-h-[50vh]">
      
      {/* Content Container (Centered and Max Width) */}
      <div className="w-full max-w-5xl mx-auto text-center">

        {/* --- Title Section --- */}
        <div className="mb-16 mt-10 md:mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Annual <span className="text-green-600 border-b-4 border-green-400 pb-1 ">Reports</span>
          </h2>
          <p className="text-xl mt-4 text-green-700 font-semibold flex items-center justify-center">
             <FaChartLine className="mr-2"/> Transparency in Action
          </p>
        </div>

        {/* --- Exciting Intro Text Section --- */}
        <div className="text-left max-w-4xl mx-auto space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to our <b>Annual Report Archive!</b> These documents provide a comprehensive look at our progress, 
            financial stewardship, and the measurable impact of our programs year over year. We believe in full transparency and accountability to our community and partners.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Inside, you&#39;ll find detailed accounts of project milestones, community engagement metrics, and financial summaries, 
            illustrating how your support translates directly into positive change.
          </p>
          
          <div className="mt-10 py-4 border-t border-b border-teal-200">
             <p className="text-green-800 text-xl font-semibold italic flex items-center justify-center">
                <FaBookOpen className="mr-3"/> Dive into the data and see our achievements!
             </p>
          </div>
        </div>
        
        {/* --- Year Links (Stylized Buttons) --- */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mt-16 mb-10 flex-wrap">
          
          {/* Link 2023 */}
          <Link 
            href="/annual/annualreportone" 
            className="
              inline-flex justify-center items-center h-16 w-full sm:w-60 md:w-72 
              bg-white text-green font-extrabold text-xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-700 hover:text-white
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2022 Report
          </Link>
          
          {/* Link 2024 */}
          <Link 
            href="/annual/annualreporttwo" 
            className="
              inline-flex justify-center items-center h-16 w-full sm:w-60 md:w-72 
              bg-white text-green-600 font-extrabold text-xl 
              rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-700 hover:text-white
              transform hover:scale-105 transition-all duration-300 ease-in-out 
              ring-4 ring-green-200 ring-offset-2
            "
          >
            2023 Report
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ReportLinks;