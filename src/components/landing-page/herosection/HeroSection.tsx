import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section
      className="
      w-full 
      flex flex-wrap flex-col md:flex-row items-center justify-center
      bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda]
      py-16 px-5 md:px-0 lg:px-8 mt-10 md:mt-30
      gap-10
    "
    >
      {/* IMAGE CONTAINER - MODIFIED FOR FLOATING */}
      <div
        className="
          flex-1 
          min-w-[270px] max-w-xl 
          
          md:float-left md:w-1/2 md:mr-6 md:mb-6 
          
        "
      >
        <Image
          src="/assets/herosection/1ad4bac4-4594-4e45-a2a5-858ee8e63b85.jpg"
          alt="Children gardening"
          width={1024}
          height={768}
          className="
            w-full h-[300px] sm:h-[340px]
            object-cover rounded-2xl 
            shadow-lg  max-w-2xl
            transition-transform duration-300 
            hover:scale-[1.03]
          "
        />
      </div>
      {/* End of IMAGE CONTAINER */}

      {/* TEXT BLOCK - Removed flex-1 and max-w-xl to allow for wrap */}
      <div className="min-w-[270px] md:min-w-[250px] text-left">
        {/* TITLE LINE */}
        <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
          <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
          <h2 className="text-4xl md:text-5xl font-semibold">Who we are</h2>
        </div>

        {/* PARAGRAPH */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 md:max-w-2xl lg:max-w-xl">
          Our mission is to contribute to food system transformation by cultivating healthy
          eating habits through fun, hands-on garden-based nutrition education and create an
          environment where children can thrive against diseases and other developmental
          health challenges. <br /> <br />
          Our vision is to build generations of healthy eaters in order to ensure and add
          value to a healthier, greener future for our children as we &rdquo;catch them young&ldquo;.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-6">
          <a
            href="/about"
            className="text-[#159c09] text-lg font-medium inline-flex items-center gap-2 
            transition-transform duration-200 hover:scale-110"
          >
            Learn more <FaArrowRight size={16} color="#159c09" />
          </a>
        </div>
      </div>
      {/* End of TEXT BLOCK */}
    </section>
  );
};

export default HeroSection;