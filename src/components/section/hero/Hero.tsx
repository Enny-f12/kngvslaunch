// src/components/Hero/Hero.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

// Define your slide data, now including a 'text' property
interface Slide {
  id: string;
  src: string; // Path to image in public folder
  alt: string;
  text: string; // Dynamic text for this specific slide
}

const slides: Slide[] = [
  { id: '1', src: '/assets/Hero/screen1.jpg', alt: 'Nutri-garden classroom', text: 'Nurturing Healthier Minds from Nutri-garden-2-fork, Securing the future' },
  { id: '2', src: '/assets/Hero/screen2.jpg', alt: 'Kids farming', text: 'Empowering children with essential food and agriculture knowledge' },
  { id: '3', src: '/assets/Hero/screen3.jpg', alt: 'Harvesting crops', text: 'Hands-on learning for a sustainable future through organic farming' },
  { id: '4', src: '/assets/Hero/screen4.png', alt: 'Kids cooking', text: 'Transforming schools into living classrooms for environmental literacy' },
  { id: '5', src: '/assets/Hero/screen5.jpg', alt: 'Community engagement', text: 'Connecting children with nature and the source of their food' },
  { id: '6', src: '/assets/Hero/screen6.jpg', alt: 'Outdoor learning', text: 'Building healthier communities through collaborative food education' },
  { id: '7', src: '/assets/Hero/screen7.jpg', alt: 'School garden', text: ' From garden to kitchen: teaching culinary skills for healthy living' },
 
];

const AUTO_PLAY_INTERVAL = 4500; // Time in milliseconds (e.g., 5 seconds per slide)

const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start auto-play
    intervalRef.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]); // Re-run effect if slides array length changes

  return (
    <>
      {/* Scroll Watcher */}
      <div className={styles.scrollWatcher}></div>

      <div className={styles.slider}>
        {/* The overlay for the background images */}
        <div className={styles.over}></div>

        {/* Render all images, but only show the active one via opacity */}
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            fill // This makes the image fill its parent container
            className={`${styles.slideImage} ${index === currentSlideIndex ? styles.active : ''}`}
            priority={index === 0} // Optimize loading for the first image
            sizes="100vw" // Helps Next.js optimize image sizes based on viewport
          />
        ))}

        {/* Dynamic Text Overlay for the current slide */}
        {/* We use slides[currentSlideIndex].id as a key to force re-render and re-trigger animation */}
        <div className={styles.textOverlay}>
          <h1 key={slides[currentSlideIndex].id}>
            {slides[currentSlideIndex].text}
          </h1>
          <div className={styles.button}>
          <a href="" className={styles.learn}>Learn more</a>
          <a href="" className={styles.programs}>Our Programs</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;