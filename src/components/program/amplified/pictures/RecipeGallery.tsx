import React from 'react';

import recipeStyles from './RecipeGallery.module.css';
 import Image from 'next/image';

 const RecipeGallery: React.FC = () => {
  return (
    <section className={recipeStyles.recipeSection}>
      <h2>Our Amplified Nutri-recipe Models</h2>
      <p>
        Each kitchen session and recipe day saw us creatively using harvested veggies from our Nutri-garden (and other
        veggies) and food products from Golden Penny Foods, Peak 4-5-6 and Peak choco.
        <br /><br />
        ✓ Yummy pasta and veggies creamy salad
        <br /><br />
        ✓ Banana-topped Amazing breakfast cereal cookies
        <br /><br />
        ✓ Banana milk-choco smoothies Olalacious! veggie-noodles
        <br /><br />
        ✓ Green stir-fry veggie egg sauce molded in plantain
        <br /><br />
        ✓ Rolled choc-oh filled French toast with fruits
        <br /><br />
        The KNGVS Amplified Nutri-kitchen helps drive the `&quot;`Nutri-garden-2-fork!`&quot;` concept home.
      </p>

      <h2 className={recipeStyles.galleryTitle}>Amplified Kitchen Pictures</h2>
      <div className={recipeStyles.galleryGrid}>
        {[
          
          'DSC_0374.jpg', 'DSC_0440.jpg', 'DSC_0453.jpg',
          'DSC_0537.jpg', 'DSC_1589.jpg', 'DSC_1503.jpg', 'DSC_1537.jpg',
          'DSC_1776.jpg', 'DSC_1770.jpg', 'DSC_1767.jpg', 'DSC_1666.jpg',
          'DSC_1631.jpg', 'KNGVS Pro_20240912_144037_1.png', 'KNGVS Pro_20240912_144215_1.png'
        ].map((filename, index) => (
          <Image key={index}
           src={`/assets/Program/amplified/${filename}`} 
           alt={`Amplified ${index + 1}`}
           width={200} 
        height={200} />
        ))}
      </div>
    </section>
  );
};

export default RecipeGallery