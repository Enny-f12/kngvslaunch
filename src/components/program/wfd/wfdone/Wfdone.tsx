'use client';
import React from 'react';
import Image from 'next/image';

const WFDKNGVSPage = () => {
  const firstRowImages = [
    'KNGVS Pro_20241223_083343_1.png',
    'KNGVS Pro_20241223_083218_1.png',
    'KNGVS Pro_20241223_083340_1.png',
    'KNGVS Pro_20241223_083400_1.png',
  ];

  const secondRowImages = [
    'KNGVS Pro_20241223_083410_1.png',
    'KNGVS Pro_20241223_083316_1.png',
    'KNGVS Pro_20241223_083357_1.png',
    'KNGVS Pro_20241223_083252_1.png',
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans py-16 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-700">
          World Food Day KNGVS Event
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
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          KNGVS in collaboration with the{' '}
          <strong>Association of Nutrition Science Students (ANSS)</strong>, Dept. of Human Nutrition
          and Dietetics participated in the global celebrations of the FAO’s World Food Day (October
          16, 2023) with the theme:{' '}
          <span className="font-semibold text-emerald-700">
            “Water is Life, Water is Food. Leave No One Behind.”
          </span>
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          From 26 to 30 October, our team of 25 dedicated volunteers visited four schools, engaging
          over 200 pupils and 30 teachers. Activities included FAO videos, gardening, water
          filtration experiments, poster contests, singing, and dancing — all to spotlight water’s
          vital role in food and life.
        </p>
      </section>

      {/* Schools Section */}
      <section className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
          Schools Visited
        </h3>
        <ul className="space-y-3 list-disc list-inside text-gray-700 text-lg">
          <li>Kings and Queens Primary School, Ashi – 46 pupils & 10 teachers</li>
          <li>Bumble Bee Elementary School, New Bodija – 50 pupils & 7 teachers</li>
          <li>VASTAB Mega Primary School, Old Bodija – 75 pupils & 10 teachers</li>
          <li>Tekhols Primary School, Bashorun – 40 pupils & 7 teachers</li>
        </ul>
      </section>

      {/* Quote Section */}
      <section className="max-w-3xl mx-auto mt-12 text-center italic text-gray-700">
        <p className="text-lg leading-relaxed border-l-4 border-emerald-600 pl-4">
          “By fostering awareness and encouraging a sense of responsibility towards water resources,
          we strive to contribute to a sustainable and food-secure future.”
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-12">
          Photo Splash: World Food Day Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {firstRowImages.map((img, i) => (
            <Image
              key={i}
              src={`/images/${img}`}
              alt={`WFD activity ${i + 1}`}
              width={300}
              height={200}
              className="rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 object-cover w-full h-56"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {secondRowImages.map((img, i) => (
            <Image
              key={i}
              src={`/images/${img}`}
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
