import React from "react";

const Intro: React.FC = () => {
  return (
    <section 
      className=" 
        w-full 
        flex justify-center 
        // INCREASED TOP PADDING (pt-20) to create separation from the component above
        // REMOVED fixed top margins (mt-10 md:mt-15 lg:mt-30) to prevent overlap issue
        py-16 pt-20 md:pt-24 
        px-5 md:px-12 lg:px-8 
        bg-white text-gray-800 
      "
    >
      <div className="max-w-6xl w-full"> {/* Added w-full here for better max-w centering */}

        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            {/* Using green-600 for consistency */}
            <div className="w-10 md:w-1 h-1 md:h-10 bg-green-600"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Welcome to <span className="text-green-600">KNGVS</span>
            </h2>
          </div>
        </div>

        {/* Paragraph */}
        <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed max-w-6xl">
          For ten years, KNGVS™ has created opportunities and participatory learning
          experiences for children to learn through play, hands-on gardening and cooking
          activities about nutrition and how it relates to their well-being and environment.
          This programme also helps children and youths learn how to build environmental
          literacy, creativity, critical thinking, problem-solving, entrepreneurship skills,
          social skills, and other life skills through creatively curated lesson plans
          implemented in out-door nutri-garden classes.
        </p>

        {/* Image Frames Section */}
        {/* Adjusted h-[200px] to min-h- to ensure content is always visible regardless of screen height */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Grow it */}
          <div
            className="rounded-xl shadow-lg bg-cover bg-center pb-32 md:pb-40 p-4 flex items-end hover:scale-[1.03] transition-transform duration-300 cursor-pointer aspect-square"
            style={{
              backgroundImage: 'url("/assets/intro/KNGVS Pro_20240910_120141_1.png")'
            }}
          >
            <h1 className="bg-white/95 text-green-600 font-bold px-3 py-1 rounded-lg shadow text-base">
              Grow it
            </h1>
          </div>

          {/* Cook it */}
          <div
            className="rounded-xl shadow-lg bg-cover bg-center pb-32 md:pb-40 p-4 flex items-end hover:scale-[1.03] transition-transform duration-300 cursor-pointer aspect-square"
            style={{
              backgroundImage: 'url("/assets/intro/KNGVS Pro_20240909_000128_1.png")'
            }}
          >
            <h1 className="bg-white/95 text-green-600 font-bold px-3 py-1 rounded-lg shadow text-base">
              Cook it
            </h1>
          </div>

          {/* Love it */}
          <div
            className="rounded-xl shadow-lg bg-cover bg-center pb-32 md:pb-40 p-4 flex items-end hover:scale-[1.03] transition-transform duration-300 cursor-pointer aspect-square"
            style={{
              backgroundImage: 'url("/assets/intro/KNGVS Pro_20240909_000141_1.png")'
            }}
          >
            <h1 className="bg-white/95 text-green-600 font-bold px-3 py-1 rounded-lg shadow text-base">
              Love it
            </h1>
          </div>

          {/* Sustain it */}
          <div
            className="rounded-xl shadow-lg bg-cover bg-center pb-32 md:pb-40 p-4 flex items-end hover:scale-[1.03] transition-transform duration-300 cursor-pointer aspect-square"
            style={{
              backgroundImage:
                'url("/assets/intro/83ecb95f-2ae3-4067-b23a-c6cd72717a8c.jpg")'
            }}
          >
            <h1 className="bg-white/95 text-green-600 font-bold px-3 py-1 rounded-lg shadow text-base">
              Sustain it
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;