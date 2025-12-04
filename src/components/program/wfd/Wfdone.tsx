'use client';
import React from 'react';
import Image from 'next/image';

const WFDKNGVSPage = () => {
  const firstRowImages = [
    '/assets/Program/wfd/KNGVS Pro_20241223_083343_1.png',
    '/assets/Program/wfd/KNGVS Pro_20241223_083218_1.png',
    '/assets/Program/wfd/KNGVS Pro_20241223_083340_1.png',
    '/assets/Program/wfd/KNGVS Pro_20241223_083400_1.png',
  ];

  const secondRowImages = [
    '/assets/Program/wfd/KNGVS Pro_20241223_083410_1.png',
    '/assets/Program/wfd/KNGVS Pro_20241223_083316_1.png',
    '/assets/Program/wfd/KNGVS Pro_20241223_083357_1.png',
    '/assets/Program/wfd/KNGVS Pro_20241223_083252_1.png',
  ];

  const schoolsVisited = [
  'Kings and Queens Primary School, Ashi, Ibadan - 46 pupils and 10 teachers',
  'Bumble Bee Elementary School, new Bodija, Ibadan - 50 pupils and 7 teachers',
  'VASTAB Mega Primary School, old Bodija Ibadan - 75 pupils and 10 teachers',
  'Tekhols Primary School, Bashorun Ibadan - 40 pupils and 7 teachers',
 
];

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans mt-10 md:mt-15 lg:mt-30 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700">
          World Food Day KNGVS Event
        </h2>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-left flex items-center justify-center px-8 gap-8">
        <Image
          src="/assets/Program/wfd/KNGVS Pro_20241223_083155_1.png"
          alt="KNGVS WFD"
          width={800}
          height={500}
          className="w-auto h-[400px] rounded-2xl shadow-lg mb-8 object-contain"
        />
        <div>
        <p className="text-lg max-w-2xl leading-relaxed text-gray-700 mb-6">
          KNGVS in collaboration with the{' '}
          <strong>Association of Nutrition Science Students (ANSS)</strong>, Dept. of Human Nutrition
          and Dietetics participated in the global celebrations of the FAO’s World Food Day (October
          16, 2023) with the theme:{' '}
          <span className="font-semibold text-emerald-700">
            “Water is Life, Water is Food. Leave No One Behind.”
          </span>
        </p>
        <p className="text-lg max-w-2xl leading-relaxed text-gray-700">
          From 26 to 30 October, our team of 25 dedicated volunteers visited four schools, engaging
          over 200 pupils and 30 teachers. Activities included FAO videos, gardening, water
          filtration experiments, poster contests, singing, and dancing all to spotlight water’s
          vital role in food and life.
        </p>
        </div>
      </section>
      {/* --- Schools Visited Section --- */}
      <div className="mb-10 lg:mb-12 max-w-4xl mx-auto mt-10 md:mt-15 lg:mt-20">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-800 text-center mb-12 relative">
          Schools Visited
          <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
        </h2>
        
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
      {/* Schools Section */}
    

      {/* Quote Section */}
      <section className="max-w-3xl mx-auto mt-12 text-center italic text-gray-700">
        <p className="text-lg leading-relaxed border-l-4 border-emerald-600 pl-4">
          “By fostering awareness and encouraging a sense of responsibility towards water resources,
          we strive to contribute to a sustainable and food-secure future.”
        </p>
      </section>

      {/* Photo Gallery */}
      <section className=" mt-10 md:mt-15 max-w-6xl mx-auto lg:mt-30">
       <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-800 text-center mb-12 relative">
          Photo Splash: World Food Day Activities
          <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-8 max-w-4xl mx-auto">
          {firstRowImages.map((img, i) => (
            <Image
              key={i}
              src={img}

              alt={`WFD activity ${i + 1}`}
              width={300}
              height={200}
              className="rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 object-cover w-full h-56"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-8 max-w-4xl mx-auto">
          {secondRowImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`WFD activity ${i + 5}`}
              width={300}
              height={200}
              className="rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 object-cover w-full h-56"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WFDKNGVSPage;
