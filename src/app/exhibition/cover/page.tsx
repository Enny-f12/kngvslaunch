'use client'

import React from 'react';
import Link from 'next/link';

// Assuming these CSS variables map to Tailwind colors:
// --color-1: Green-800
// --color-4: White (or Gray-50)

const AnnualExhibitionReport: React.FC = () => {
    return (
        <section className="min-h-screen">
            {/* .heading h2 (Main Title Block) */}
            <div className="text-center mt-15 lg:mt-30 text-black">
                <h1 className="text-5xl md:text-6xl font-bold mb-12">Annual<span className="text-green-600 ml-2">Exhibition</span></h1>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
                Every year, our Annual Exhibition brings together artists, innovators, and storytellers from across the region to celebrate creativity in all its forms.
                Step into a journey through time — where each year tells its own story of imagination, exploration, and artistic evolution.
                Discover how our exhibitions have grown, transformed, and inspired communities year after year.
            </p>

            {/* .paragraph */}
            <div className="mx-auto flex justify-center items-center mt-10">
               <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg mb-6">Click below to view the exhibition over the years:</p>
            </div>

            {/* .years (Links container) */}
            <div className="mx-auto flex justify-center items-center gap-6 mt-12 mb-20 max-sm:gap-4 max-sm:flex-wrap">

                {/* .years a (Individual Link) */}
                <Link
                    href="/exhibition"
                    className="
                        inline-block px-10 py-2.5 rounded-4xl
                        font-medium text-base leading-relaxed 
                        text-green-800 border border-green-800 
                        w-60 text-center bg-white 
                        transition-all duration-300 ease-in-out
                        hover:text-white hover:bg-green-800
                        max-sm:w-40
                    "
                >
                    2024
                </Link>
                <Link
                    href="/exhibition/2023"
                    className="
                        inline-block px-10 py-2.5 rounded-4xl
                        font-medium text-base leading-relaxed 
                        text-green-800 border border-green-800 
                        w-60 text-center bg-white 
                        transition-all duration-300 ease-in-out
                        hover:text-white hover:bg-green-800
                        max-sm:w-40
                    "
                >
                    2023
                </Link>

            </div>

        </section>
    );
}

export default AnnualExhibitionReport;