'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Slide {
  id: string;
  src: string;
  alt: string;
  text: string;
}

const slides: Slide[] = [
  { id: '1', src: '/assets/Hero/screen1.jpg', alt: 'Nutri-garden classroom', text: 'Nurturing Healthier Minds from Nutri-garden-2-fork, Securing the future' },
  { id: '2', src: '/assets/Hero/screen2.jpg', alt: 'Kids farming', text: 'Empowering children with essential food and agriculture knowledge' },
  { id: '3', src: '/assets/Hero/screen3.jpg', alt: 'Harvesting crops', text: 'Hands-on learning for a sustainable future through organic farming' },
  { id: '4', src: '/assets/Hero/screen4.png', alt: 'Kids cooking', text: 'Transforming schools into living classrooms for environmental literacy' },
  { id: '5', src: '/assets/Hero/screen5.jpg', alt: 'Community engagement', text: 'Connecting children with nature and the source of their food' },
  { id: '6', src: '/assets/Hero/screen6.jpg', alt: 'Outdoor learning', text: 'Building healthier communities through collaborative food education' },
  { id: '7', src: '/assets/Hero/screen7.jpg', alt: 'School garden', text: 'From garden to kitchen: teaching culinary skills for healthy living' },
];

const AUTO_PLAY_INTERVAL = 4500;

const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      

      {/* Slider */}
      <div className="relative w-full h-120 md:h-150 lg:h-200 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Images */}
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
            sizes="100vw"
          />
        ))}

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center gap-10 lg:gap-16 px-5 sm:px-10 md:px-20">
          <h1 key={slides[currentSlideIndex].id} className="text-white font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[4.5vw] leading-tight drop-shadow-2xl animate-fadeIn">
            {slides[currentSlideIndex].text}
          </h1>

          {/* Buttons */}
          <div className="flex flex-row gap-4 sm:gap-8 flex-wrap justify-center">
            <a href="/about" className="w-40 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-900 hover:text-green-600 transform transition-transform duration-300 hover:scale-105">
              Learn More
            </a>
            <a href="/exhibition" className="w-40 px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-900 hover:text-white transform transition-transform duration-300 hover:scale-105">
              Our Program
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }

        @keyframes scrollWatcher {
          to { transform: scaleX(1); }
        }
        .animate-scrollWatcher { animation: scrollWatcher linear 1s forwards; transform-origin: left; }
      `}</style>
    </>
  );
};

export default Hero;
