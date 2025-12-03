'use client';
import React from 'react';
//import Link from 'next/link';
import Image from 'next/image';
//import { FaArrowLeft } from 'react-icons/fa'; // Ensure you have react-icons installed

// --- Data for the component (Unchanged) ---
const schoolsVisited = [
  'Kings and Queens Primary School, Ashi, Ibadan - 46 pupils and 10 teachers',
  'Bumble Bee Elementary School, new Bodija, Ibadan - 50 pupils and 7 teachers',
  'VASTAB Mega Primary School, old Bodija Ibadan - 75 pupils and 10 teachers',
  'Tekhols Primary School, Bashorun Ibadan - 40 pupils and 7 teachers',
];

const photoGalleryImages = [
  '/images/KNGVS Pro_20241223_083343_1.png',
  '/images/KNGVS Pro_20241223_083218_1.png',
  '/images/KNGVS Pro_20241223_083340_1.png',
  '/images/KNGVS Pro_20241223_083400_1.png',
  '/images/KNGVS Pro_20241223_083410_1.png',
  '/images/KNGVS Pro_20241223_083316_1.png',
  '/images/KNGVS Pro_20241223_083357_1.png',
  '/images/KNGVS Pro_20241223_083252_1.png',
];

// --- Component Definition ---
interface WfdEventPageProps {
  eventTitle?: string;
  backLinkHref?: string;
}

const WfdEventPage: React.FC<WfdEventPageProps> = ({
  eventTitle = 'World Food Day KNGVS Event',
  // Default link for the back button
}) => {
  return (
    // .pageContainer: Centered container with max-width and margins
    <div className="w-[90%] max-w-6xl mx-auto py-8 lg:py-12 font-sans text-gray-800">
      
      {/* .heading: Back button and Title */}
      <div className="flex items-center gap-4 mb-6 border-b pb-4 border-gray-200">
        
        
        
        {/* .heading h2 */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {eventTitle}
        </h2>
      </div>
  {/* Hero Section */}
       <section className="max-w-5xl mx-auto text-center">
         <Image
           src="/images/KNGVS Pro_20241223_083155_1.png"
           alt="KNGVS WFD"
           width={800}
           height={500}
           className="w-full h-auto rounded-2xl shadow-lg mb-8 object-cover"
         />
         </section>
      {/* --- Schools Visited Section --- */}
      <div className="mb-10 lg:mb-12">
        {/* .schools h3 */}
        <h3 className="text-2xl font-semibold mb-4 text-green-700">
          Schools Visited
        </h3>
        {/* .schools ul */}
        <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          {schoolsVisited.map((school, index) => (
            // .schools li: Light background, rounded, green left border accent
            <li 
              key={index} 
              className="bg-green-50/50 p-3 rounded-lg mb-1 border-l-4 border-green-500 shadow-sm text-lg text-gray-700"
            >
              {school}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Quote Section --- */}
      {/* .say: Centered, padded blockquote with accent background */}
      <div className="text-center mx-auto my-12 p-6 bg-green-50 border-l-4 border-green-400 rounded-lg max-w-3xl shadow-md">
        <p className="text-xl italic leading-relaxed text-gray-600">
          By fostering awareness and encouraging a sense of responsibility
          towards water resources, we strive to contribute to a sustainable
          and food-secure future.
        </p>
      </div>

      {/* --- Photo Gallery Section --- */}
      <div className="mt-16">
        {/* .photoSection h2 */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Photo Splash: World Food Day Activities
        </h2>
        
        {/* .photoGrid: Responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photoGalleryImages.map((src, index) => (
            // .photoWrapper: Square container with hover effect
            <div 
              key={index} 
              className="w-full aspect-square relative overflow-hidden rounded-xl shadow-lg group"
            >
              <Image
                src={src}
                alt={`World Food Day Activity ${index + 1}`}
                fill // Use Next.js fill prop for aspect-ratio container
                className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WfdEventPage;