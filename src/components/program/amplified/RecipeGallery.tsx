'use client'

import React from 'react';
import Image from 'next/image';

const RecipeGallery: React.FC = () => {
  return (
    // .recipeSection: Padding, background, and centered content
    <section className="py-16 px-4 bg-white max-w-6xl mx-auto">
      
      <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse mt-10 md:mt-15 lg:mt-30">
            <div className="w-10 md:w-2 h-1 md:h-10 bg-[#159c09]"></div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Amplified Nutri-recipe models
            </h2>
          </div>
      
      {/* Descriptive Paragraph */}
 <p className="text-lg md:text-xl leading-relaxed mt-8">
        Each kitchen session and recipe day saw us creatively using harvested veggies from our Nutri-garden (and other
        veggies) and food products from Golden Penny Foods, Peak 4-5-6 and Peak choco.
      </p>

      {/* Replicating the Recipe List styles (.recipeList and .recipeItem) */}
      <ul className="flex flex-col gap-4 max-w-6xl mx-auto mb-12 p-0 list-none mt-8">
        {[
          'Yummy pasta and veggies creamy salad',
          'Banana-topped Amazing breakfast cereal cookies',
          'Banana milk-choco smoothies Olalacious! veggie-noodles',
          'Green stir-fry veggie egg sauce molded in plantain',
          'Rolled choc-oh filled French toast with fruits',
        ].map((recipe, index) => (
          // .recipeItem: Light background, teal border, shadow, padding
          <li 
            key={index} 
            className="bg-gray-50 px-6 py-4 border-l-4 border-green-600 rounded-lg text-base text-gray-700 shadow-sm"
          >
            ✓ {recipe}
          </li>
        ))}
      </ul>
      
      {/* Final Concept Summary */}
      <p className="max-w-3xl mx-auto mb-16 leading-relaxed text-base text-gray-600 text-center">
         The KNGVS Amplified Nutri-kitchen helps drive the &#34;Nutri-garden-2-fork!&#34; concept home.
      </p>

      {/* Gallery Title (.galleryTitle) */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 mt-10 md:mt-15 lg:mt-30">Amplified Kitchen Pictures
         <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
      </h2>

      {/* Gallery Grid (.galleryGrid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto justify-between">
        {[
          'DSC_0374.jpg', 'DSC_0440.jpg', 'DSC_0453.jpg',
          'DSC_0537.jpg', 'DSC_1589.jpg', 'DSC_1503.jpg', 'DSC_1537.jpg',
          'DSC_1776.jpg', 'DSC_1770.jpg', 'DSC_1767.jpg', 'DSC_1666.jpg',
          'DSC_1631.jpg', 'KNGVS Pro_20240912_144037_1.png', 'veggie cake.jpg','KNGVS Pro_20240912_144215_1.png',
        ].map((filename, index) => (
          // .galleryItem: Image wrapper with rounded corners and hover effect
          <div key={index} className="w-full h-[250px] max-w-lg overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Image 
              src={`/assets/Program/amplified/${filename}`} 
              alt={`Amplified ${index + 1}`}
              // Ensure image covers the area, maintaining aspect ratio
              className="w-full h-full object-cover" 
              width={300} 
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeGallery;