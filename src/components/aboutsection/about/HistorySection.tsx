import React from "react";
import Image from "next/image";

const HistorySection: React.FC = () => {
  return (
    <div
      className="
        w-full text-black 
        bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda]
       mt-10 md:mt-15 lg:mt-30
      "
    >
      <div
        className="
          max-w-6xl mx-auto flex flex-col lg:flex-row 
          items-center justify-center gap-10
          py-16 px-6
        "
      >
        {/* TEXT  */}
        <div className="w-full text-left">
          <div className="flex flex-col">
            <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
              <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
              <h2 className="text-4xl md:text-5xl font-semibold">
                Our History
              </h2>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 md:max-w-2xl lg:max-w-xl">
            Our journey began as a small project aimed at addressing malnutrition, 
            a growing concern in our country. Recognizing the importance of early 
            intervention, we set out to integrate nutrition education into children&#39;s 
            lives from the very beginning. Our vision was simple: to reduce the risk 
            of malnutrition by teaching kids about healthy food choices through hands-on 
            experiences in gardening and cooking.
            <br /><br />
            What started as a local initiative quickly grew into a full-fledged program, 
            offering activities like vacation schools, volunteer training, amplified 
            kitchen workshops, and an annual exhibition. Each element is designed to 
            nurture children who not only understand nutrition but also carry these lessons 
            into adulthood.
            
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <Image
            src="/assets/about/history/pioneer nutri-garden kids.JPG"
            alt="Pioneer Nutri-Garden Kids"
            width={600}
            height={400}
            className="
              w-full h-[400px] object-cover rounded-2xl
              shadow-[0_4px_10px_rgba(21,156,9,0.6)]
              transition-transform duration-300 hover:scale-105
              sm:h-[350px] md:h-[400px]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
