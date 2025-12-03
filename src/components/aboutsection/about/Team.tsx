import React from 'react';
import Image from 'next/image';

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
    <section className="w-full bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda] px-6 lg:px-0 mt-30">
      <div className="max-w-6xl mx-auto text-left">
        <header className="mb-16">
          <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
          <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
              <h2 className="text-4xl md:text-5xl font-semibold">
            Meet <span className="text-green-600">Our Team</span>
          </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Our dedicated team is passionate about empowering children to make healthy, informed choices. Through hands-on learning in nutrition and gardening, we aim to inspire the next generation to lead healthier, more sustainable lives.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
