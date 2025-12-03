import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section>
      {/* Landing Section */}
      <div className="text-center mt-15 lg:mt-30 text-black">
        <h1 className="text-5xl md:text-6xl font-bold ">About <span className="text-green-600">Us</span></h1>
      </div>

      {/* Story Section */}
      <div
        className="
          w-full 
      bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda]
      py-16 px-5
      mt-10 md:mt-10
        "
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Text Section */}
        <div className="min-w-[270px] md:min-w-[250px] text-left">
            <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
            <h2 className="text-4xl md:text-5xl font-semibold">How We Started</h2>
            </div>
      

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 md:max-w-2xl lg:max-w-xl">
            Kids Nutri-garden™ Vacation School, is an innovative and unconventional
            annual community service project organised in the Department of Human
            Nutrition and Dietetics, University of Ibadan (UI), Nigeria since 2016
            during the long vacation of primary schools in Nigeria (August to
            September).
            <br />
            <br />
            For ten years, KNGVS™ has created opportunities and participatory
            learning experiences for children to learn through play, hands-on
            gardening and cooking activities about nutrition and how it relates to
            their well-being and environment. 
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-row gap-4 items-center justify-center">
          <Image
            src="/assets/about/aboutsection/happy kids parents and facilitators after prog.jpg"
            alt="Happy kids, parents and facilitators" 
            width={3264}
            height={2448}
             className="
            w-[300px] h-[400px] object-cover rounded-2xl
            shadow-[0_4px_10px_rgba(21,156,9,0.5)]
            transition-transform duration-300 hover:scale-110
          "
          />
          <div className="flex flex-col gap-4">
          <Image
            src="/assets/about/aboutsection/happy kids parents and facilitators after prog.jpg"
            alt="Happy kids, parents and facilitators"
            width={3264}
            height={2448}
             className="
            w-[250px] h-[200px] object-cover rounded-2xl
            shadow-[0_4px_10px_rgba(21,156,9,0.5)]
            transition-transform duration-300 hover:scale-110
          "
          />
          <Image
            src="/assets/about/aboutsection/happy kids parents and facilitators after prog.jpg"
            alt="Happy kids, parents and facilitators"
            width={3264}
            height={2448}
             className="
            w-[250px] h-[200px] object-cover rounded-2xl
            shadow-[0_4px_10px_rgba(21,156,9,0.5)]
            transition-transform duration-300 hover:scale-110
          "
          />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
