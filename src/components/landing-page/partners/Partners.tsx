'use client';
import React from 'react';
import Image from 'next/image';

const partnerLogos = [
  '/assets/partners/NIHORT official logo.jpg',
  '/assets/partners/KNGVS Pro_20240909_000303_1.png',
  '/assets/partners/KNGVS Pro_20240909_000235_1.png',
  '/assets/partners/KNGVS Pro_20240910_120419_1.png',
  '/assets/partners/FRIN official logo.jpg',
  '/assets/partners/KNGVS Pro_20240909_000252_1.png',
  '/assets/partners/KNGVS Pro_20240909_000246_1.png',
  '/assets/partners/KNGVS Pro_20240910_120422_1.png',
  '/assets/partners/KNGVS Pro_20240910_120405_2.png',
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 px-5 md:px-12 lg:px-8  my-16 bg-linear-to-b from-white via-green-100 to-green-200 mt-0 lg:mt-30">
     <div className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
      {/* Text Section */}
     <div className="mb-12 text-left">
          <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
          <h2 className=" text-4xl md:text-5xl font-semibold">Our Partners</h2>
        </div>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl">
          Our partners are key to the success of our kids&apos; nutrition garden program. Collaborating with local schools,
          community groups, and nutrition experts, they provide resources and expertise that enhance our vacation school,
          volunteer training, amplified kitchen, and annual exhibition. <span className='hidden md:flex'> Together, we promote healthy eating,
          sustainability, and community engagement, empowering children to build lifelong food skills.</span>
        </p>
      </div>

      {/* Logo Carousel */}
      <div className="overflow-hidden w-full mt-12">
        <div className="flex gap-8 animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="shrink-0 w-[200px] h-[200px] md:w-[130px] md:h-[100px] sm:w-[90px] sm:h-[70px] transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo}
                alt={`partner-logo-${index}`}
                width={200}
                height={200}
                className="object-contain w-full h-full animate-bounceIn"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        @keyframes bounceIn {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounceIn {
          animation: bounceIn 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .animate-bounceIn {
            animation-duration: 2s;
          }
        }
      `}</style>
      </div>
    </section>
  );
};

export default PartnersSection;
