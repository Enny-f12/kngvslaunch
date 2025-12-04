'use client';
import React from 'react';
import Image from 'next/image';

const galleryImages = [
  '/assets/Program/training/IMG-20240723-WA0008.jpg',
  '/assets/Program/training/IMG-20240725-WA0061.jpg',
  '/assets/Program/training/IMG-20240725-WA0076.jpg',
  '/assets/Program/training/IMG-20240725-WA0066.jpg',
  '/assets/Program/training/IMG-20240725-WA0088.jpg',
  '/assets/Program/training/IMG-20240725-WA0083.jpg',
  '/assets/Program/training/IMG-20240725-WA0008.jpg',
  '/assets/Program/training/IMG-20240725-WA0044.jpg',
  '/assets/Program/training/IMG-20240726-WA0048.jpg',
  '/assets/Program/training/IMG-20240726-WA0037.jpg',
  '/assets/Program/training/IMG-20240725-WA0073.jpg',
  '/assets/Program/training/IMG-20240723-WA0014.jpg',
];

const TrainingGallerySection: React.FC = () => (
  <section className="w-full pt-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Training Session
          <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Volunteer training equips individuals with the necessary skills and knowledge to effectively contribute.
          It fosters teamwork, responsibility, and leadership, ensuring volunteers make a positive, lasting impact.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Volunteer training session photo ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://placehold.co/400x300/cccccc/FFFFFF?text=Error';
              }}
            />
          </div>
        ))}
      </div>

      
    </div>
  </section>
);

export default TrainingGallerySection;
