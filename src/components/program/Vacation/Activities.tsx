'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  return (
    <section className="relative z-30 py-20 px-6 overflow-hidden">
     
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Our Activities Include: 
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-green-900 text-lg"
      >
        {[
          { icon: '🌱', text: 'Gardening & Planting Sessions' },
          { icon: '🍎', text: 'Nutrition Education & Healthy Eating' },
          { icon: '🏃‍♀️', text: 'Physical Exercise & Lifestyle Talks' },
          { icon: '🎨', text: 'Creative Games & Learning Activities' },
        ].map((activity, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white border border-green-200 shadow-lg hover:shadow-2xl rounded-2xl p-6 text-center transition-all duration-300"
          >
            <div className="text-4xl mb-3">{activity.icon}</div>
            <span className="font-medium">{activity.text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Activities;
