'use client'

import React from 'react';
import Link from 'next/link';
import { FaPaintBrush, FaCalendarAlt } from 'react-icons/fa';

const AnnualExhibitionReport: React.FC = () => {
    return (
        // Outer container with padding and background
        <div className="pt-12 pb-20 px-4 md:px-10 bg-gray-50 min-h-screen">
            
            {/* Content Container (Centered and Max Width) */}
            <div className="w-full max-w-5xl mx-auto text-center">

                {/* --- Title Section --- */}
                <div className="mb-16 mt-10 md:mt-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Annual <span className="text-green-600 border-b-4 border-green-400 pb-1">Exhibition</span>
                    </h1>
                    <p className="text-xl mt-4 text-green-700 font-semibold flex items-center justify-center">
                       <FaCalendarAlt className="mr-2"/> A Celebration of Creativity and Innovation
                    </p>
                </div>

                {/* --- Exciting Intro Text Section --- */}
                <div className="text-left max-w-4xl mx-auto space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Every year, our <b>Annual Exhibition</b> brings together artists, innovators, and storytellers from across the region to celebrate creativity in all its forms. This event is the pinnacle of our community&#39;s artistic output, showcasing projects that push boundaries and inspire dialogue.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Step into a journey through time — where each archive tells its own story of imagination, exploration, and artistic evolution. Discover how our exhibitions have grown, transformed, and impacted communities year after year. From experimental media to traditional crafts, these archives document our history of fostering cultural expression.
                    </p>
                    
                    <div className="mt-10 py-4 border-t border-b border-green-200">
                         <p className="text-green-800 text-xl font-semibold italic flex items-center justify-center">
                            <FaPaintBrush className="mr-3"/> Explore the masterpieces from previous years!
                         </p>
                    </div>
                </div>
                
                {/* --- Year Links (Stylized Buttons) --- */}
                <div className="flex justify-center items-center gap-8 md:gap-16 mt-16 mb-10 flex-wrap">
                    
                    {/* Link 2024 */}
                    <Link 
                        href="/exhibition" 
                        className="
                            inline-flex justify-center items-center h-16 w-full sm:w-60 md:w-72 
                            bg-green-700 text-white font-extrabold text-xl 
                            rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-800 
                            transform hover:scale-105 transition-all duration-300 ease-in-out 
                            ring-4 ring-green-200 ring-offset-2
                        "
                    >
                        2023 Exhibition
                    </Link>
                    
                    

                </div>
            </div>
        </div>
    );
}

export default AnnualExhibitionReport;