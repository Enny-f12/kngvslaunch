'use client';

import React from 'react';
import Image from 'next/image';

// --- Type Definition and Data ---
interface PartnerSchool {
  id: string;
  name: string;
  image: string;
}

const partnerSchools: PartnerSchool[] = [
  {
    id: '1',
    name: 'Vastab Mega School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120334_1.png',
  },
  {
    id: '2',
    name: 'Ebenezer Primary School',
    image: '/assets/Program/vacation/KNGVS Pro_20240909_000317_1.png',
  },
  {
    id: '3',
    name: 'Moniya Ibadan',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120323_1.png',
  },
  {
    id: '4',
    name: 'Bumble Bee School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120349_1.png',
  },
  {
    id: '5',
    name: 'Betsy School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120330_1.png',
  },
  {
    id: '6',
    name: 'Tekhol School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120346_1.png',
  },
  {
    id: '7',
    name: 'Kings and Queens Primary School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120308_1.png',
  },
];

const PartnerSchools: React.FC = () => {
  const totalSchools = partnerSchools.length;

  return (
    <section className="relative py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <h2 className="font-extrabold text-3xl sm:text-4xl text-green-800 text-center mb-12 relative">
          Schools Partnered With 
          <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
        </h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {partnerSchools.map((school) => (
            <article 
              key={school.id} 
              // Card Styling: Scale up on hover and add a green border accent
              className="w-full max-w-xs p-3 bg-white text-center rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:border-green-400 relative overflow-hidden group"
            >
              {/* Image Container */}
              <div className="w-full h-40 md:h-52 rounded-lg overflow-hidden mb-3 relative bg-gray-100 shadow-inner">
                <Image
                  src={school.image}
                  alt={`${school.name} logo or building`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={250}
                  height={200}
                />
              </div>
              
              {/* Partner Name */}
              <h3 className="text-base font-semibold text-gray-800 mt-2 p-1">
                {school.name}
              </h3>
            </article>
          ))}
        </div>

        {/* --- Partners Stats --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mt-16 p-6 py-20 bg-linear-to-b from-white via-green-100 to-green-200  rounded-xl shadow-inner">
          <div className="text-center">
            <span className="text-4xl font-extrabold text-green-600 block mb-1">
              {totalSchools}+
            </span>
            <span className="text-base text-gray-600 font-medium">
              Partner Schools
            </span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-extrabold text-green-600 block mb-1">
              500+
            </span>
            <span className="text-base text-gray-600 font-medium">
              Children Reached
            </span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-extrabold text-green-600 block mb-1">
              100%
            </span>
            <span className="text-base text-gray-600 font-medium">
              Fun Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSchools;