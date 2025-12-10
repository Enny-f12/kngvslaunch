import React from "react";
import Image from "next/image";

const programs = [
  {
    title: "Vacation School",
    link: "vacation.html",
    image: "/assets/programs/IMG-20230822-WA0145.jpg",
  },
  {
    title: "Volunteer Training",
    link: "training.html",
    image: "/assets/programs/IMG-20240723-WA0008.jpg",
  },
  {
    title: "Amplified Kitchen",
    link: "amplified.html",
    image: "/assets/programs/Aunty Debbie KNGVS 2021.jpg",
  },
  {
    title: "Annual Exhibition",
    link: "exhibition.html",
    image: "/assets/programs/KNGVS Pro_20240910_151717_1.png",
  },
];

const OurPrograms: React.FC = () => {
  return (
    <section className="w-full py-16 px-5 md:px-12 lg:px-8  bg-white text-gray-800 mt-10 md:mt-15 lg:mt-30">
      <div className="max-w-6xl mx-auto">

        {/* Heading + Paragraph */}
        <div className="mb-12 text-left">
          <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Our Programs
            </h2>
          </div>

          <p className="text-lg md:text-xl leading-relaxed max-w-6xl">
            Our kids&#39; nutrition garden program is a dynamic, hands-on initiative aimed at fostering
            healthy eating habits and a deeper understanding of sustainable food practices in
            children. Through engaging activities such as vacation school, volunteer training, and
            immersive amplified kitchen experiences, kids learn to cultivate, cook, and appreciate
            fresh, nutritious produce.<span className="hidden lg:flex"> The program culminates in an exciting annual exhibition where
            participants showcase their newfound knowledge and skills. By connecting children to the
            source of their food, we inspire lifelong healthy habits while encouraging environmental
            stewardship, teamwork, and a love for gardening and nutrition.</span>
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ title, link, image }) => (
            <div
              key={title}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />

              <h3 className="text-lg font-semibold mt-3 px-4">
                <a
                  href={link}
                  className="text-[#159c09] hover:underline hover:scale-105 inline-block transition-transform"
                >
                  {title}
                </a>
              </h3>

              <div className="h-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
