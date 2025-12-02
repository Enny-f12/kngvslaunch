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
    name: 'AB',
    role: 'Advisory Board',
    imageUrl: '/assets/about/team/Emmanuel.jpg',
  },
  {
    name: 'Emmanuel Udoh',
    role: 'Program Officer',
    imageUrl: '/assets/about/team/Emmanuel.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <header className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Meet <span className="text-green-600">Our Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our dedicated team is passionate about empowering children to make healthy, informed choices. Through hands-on learning in nutrition and gardening, we aim to inspire the next generation to lead healthier, more sustainable lives.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
