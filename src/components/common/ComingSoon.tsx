'use client';

import React from 'react';
import Link from 'next/link';
import { FaTools, FaChevronLeft } from 'react-icons/fa';

const ComingSoon: React.FC = () => {
    return (
        // Enhanced template structure
        <div className="pt-24 pb-20 px-4 md:px-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center">
            
            <div className="w-full max-w-xl mx-auto">

                {/* --- Icon and Title --- */}
                <FaTools className="text-8xl text-green-600 mx-auto mb-6 animate-pulse" />
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                    Page Under <span className="text-green-600 border-b-4 border-green-400 pb-1">Construction</span>
                </h1>
                
                <p className="text-2xl mt-4 text-gray-700 font-semibold mb-8">
                    We&#39;re working hard to bring you this content!
                </p>

                {/* --- Detail Text --- */}
                <div className="text-left max-w-md mx-auto space-y-4 p-6 bg-white rounded-xl shadow-lg">
                    <p className="text-gray-600 text-lg">
                        Thank you for your patience. The page you requested is currently being curated, designed, or updated with the latest information.
                    </p>
                    <p className="text-teal-800 font-medium italic">
                        Please check back soon!
                    </p>
                </div>
                
                {/* --- Back Button --- */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="
                            inline-flex items-center justify-center h-14 px-8 
                            bg-green-600 text-white font-extrabold text-lg 
                            rounded-full shadow-lg hover:shadow-xl hover:bg-green-700 
                            transform hover:scale-105 transition-all duration-300 ease-in-out
                            ring-4 ring-green-200 ring-offset-2
                        "
                    >
                        <FaChevronLeft className="mr-2"/> Go Back to Homepage
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ComingSoon;