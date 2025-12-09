'use client';

import React from 'react';
import Image from 'next/image';
import { FaUsers } from 'react-icons/fa'; // Import icons for visual flair

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Shirley Ejoh',
    role: 'Founder Of Kids Nutri Garden',
    imageUrl: '/assets/team/IMG-20240910-WA0032.jpg',
  },
  
  {
    name: 'Emmanuel Udoh',
    role: 'Program Officer',
    imageUrl: '/assets/about/team/Emmanuel.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    // Background gradient changed to a softer look
    <section className="w-full bg-linear-to-b from-white via-green-50 to-green-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header and Grid Container (Two Columns on Large Screens) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN: Header Text --- */}
          <header className="lg:sticky lg:top-10 mb-8 lg:mb-0 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-3xl text-green-600" />
              <p className="text-lg font-medium text-green-700 uppercase tracking-widest">Our Leadership</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Meet the <span className="text-green-600">Dedicated Team</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg mt-6">
              Our dedicated team is passionate about empowering children to make healthy, informed choices. Through hands-on learning in nutrition and gardening, we aim to inspire the next generation to lead healthier, more sustainable lives. Every member brings expertise and heart to our **Nutri-Garden-2-Fork** mission.
            </p>
            
           
          </header>

          {/* --- RIGHT COLUMN: Team Members Grid --- */}
          <div className="lg:order-2">
            {/* Grid layout adjusted to center two members in a column layout */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
                >
                  <div className="relative w-full h-56 md:h-72 aspect-w-1 aspect-h-1">
                    {/* The Image component uses `fill` which handles responsive size */}
                    <Image
                      src={member.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top" // object-top centers the person's face better
                      priority={index < 2} // Prioritize loading for the first two
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-medium mt-1 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;