'use client';


import React from 'react';

const VacationHero = () => {
  return (
   < div className="relative bg-white py-16 px-6 overflow-hidden">
    <div className="text-center mt-15 lg:mt-30 text-black">
        <h1 className="text-5xl md:text-6xl font-bold ">Vacation <span className="text-green-600">School</span></h1>
      </div>
    <section className="py-20 px-6 text-center bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda] border border-green-200 mt-15 rounded-lg">

     
     
      <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg z-10">
        The Kids Nutri-Garden Vacation School engages children in hands-on learning about
        nutrition, exercise, and gardening. Through fun activities, children learn healthy eating
        habits, the benefits of physical activity, and how to grow their own fruits and vegetables.
      </p>
      
    </section>
    </div>
  );
};

export default VacationHero;
