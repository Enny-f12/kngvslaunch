import React from "react";
import Image from "next/image";

const MissionSection: React.FC = () => {
  return (
    <div
      className="
      mt-10 md:mt-15 lg:mt-30
        w-full  text-black
       bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda]
      "
    >
      <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 py-16 px-8   ">
        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <Image
            src="/assets/about/mission/DSC08067.JPG"
            alt="Children in Garden"
            width={600}
            height={400}
            className="
            w-full h-[400px] object-cover rounded-2xl
            shadow-[0_4px_10px_rgba(21,156,9,0.5)]
            transition-transform duration-300 hover:scale-110
          "
          />
        </div>

        {/* TEXT */}
        <div
          className="
           text-left 
         w-full 
        
        "
        >
          {/* Heading */}
          <div className="flex flex-col">
            <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
          <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
              <h2 className="text-4xl md:text-5xl font-semibold">
                Our Mission
              </h2>
            </div>
          </div>

          {/* Paragraph */}
           <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 md:max-w-2xl lg:max-w-xl">
            Our mission: To nurture generations of healthy eaters! in order to
            insure and add value to a Healthier, Greener Future for Our Children
            as we ’catch them young’. <br /> <br />
            <strong>Goal 1:</strong> to contribute to food system transformation
            and cultivate healthy eating habits especially the consumption of
            vegetables through hands-on garden-based nutrition education. <br />
            <br />
            <strong>Goal 2:</strong> to provide outdoor participatory/ hands-on
            learning to build environmental literacy, creativity, critical
            thinking, problem-solving, and entrepreneurship skills. <br /> <br />

          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
