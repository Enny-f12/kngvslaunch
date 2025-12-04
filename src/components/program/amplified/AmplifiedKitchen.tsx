'use client';

import React from 'react';
import Image from 'next/image';

const AmplifiedKitchen: React.FC = () => {
  return (
    
    <section className=" px-4 sm:px-8 bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda] text-gray-800 max-w-6xl mx-auto">
      
     
      <div className="text-center mt-10  md:mt-15 lg:mt-20 text-black">
        <h1 className="text-5xl md:text-6xl font-bold ">Amplified <span className="text-green-600 ml-2">Kitchen</span></h1>
      </div>

     
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mx-auto py-24">
        
        {/* .kitchenText: Text column, takes 50% width on large screens */}
        <div className="flex-1 lg:w-1/2 text-gray-700 leading-relaxed">
         <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            <div className="w-10 md:w-2 h-1 md:h-10 bg-[#159c09]"></div>
            <h2 className="text-3xl md:text-5xl font-semibold">
             Nutri-Kitchen
            </h2>
          </div>
          
           <p className="text-lg md:text-xl leading-relaxed">
            This exciting and highly engaging activity took place every Wednesday throughout the month of August,
            in the Department of Human Nutrition and Dietetic kitchen and in collaboration with O’beth treats,
            Ibadan. Mrs Elizabeth Shotunde, CEO, Master Chef and gardening enthusiast, inspired and brought to life
            KNGVS ‘Amplified Nutri-kitchen’. This new feature of KNGVS brought together children, youths, and adults
            (parents) to learn hands-on and gain creative skills to prepare simple, healthy, and tasty meals with
            veggies and fruits.
          </p>
        </div>
        
        
        <div
        className="
          flex-1 
          min-w-[270px]  lg:max-w-xl 
          
          md:float-left md:w-3/4 lg:w-1/2 md:mr-6 md:mb-6 
          
        "
      >
          
          <Image 
            src="/assets/Program/amplified/KNGVS Pro_20240912_144212_1.png" 
            alt="Amplified Kitchen" 
            width={429} 
            height={648}
            className="w-full h-[300px] sm:h-[380px]
            object-cover rounded-2xl 
            shadow-[0_4px_10px_rgba(21,156,9,0.5)] max-w-2xl
            transition-transform duration-300 
            hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
};

export default AmplifiedKitchen;