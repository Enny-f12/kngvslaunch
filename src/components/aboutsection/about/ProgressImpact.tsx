import React from "react";

const ProgressImpact: React.FC = () => {
  return (
    <div
      className="
        flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-40 mx-auto mt-10 md:mt-15 lg:mt-30
        shadow-[0_4px_10px_rgba(21,156,9,0.6)]
        p-6 md:p-8 lg:p-16 pt-16 pb-16
        items-center justify-center place-items-center
        rounded-lg text-[#f9f1f1]
        bg-[linear-gradient(135deg,hsl(142_76%_36%),hsl(88_75%_20%))]
        w-full md:max-w-5xl lg:max-w-6xl 
      "
    >
      {/* TEXT */}
      <div className="flex-1 tracking-wide leading-relaxed lg:w-full">
        <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Progress and Impacts Made So Far
        </h3>
        <br />
        <p className="text-base leading-relaxed tracking-wide lg:text-lg">
          We have made progress over the years, teaching thousands of children to
          grow their own vegetables and make healthier food choices, fostering
          lifelong healthy eating habits through fun, hands-on gardening and
          nutrition activities.
        </p>
      </div>

      {/* GRADES */}
      <div
        className="
          flex flex-col gap-12 flex-1 lg:w-full
        "
      >
        {/* Row 1 */}
        <div
          className="
            flex flex-row gap-8
             md:gap-6 lg:gap-20
          "
        >
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold md:text-3xl">8</h2>
            <p className="text-base lg:text-lg">School partnership</p>
          </div>

          <div className="text-center">
            <h2 className="text-white text-2xl font-bold md:text-3xl">500</h2>
            <p className="text-base lg:text-lg">Community members reached</p>
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="
            flex flex-row gap-8
            md:gap-6 lg:gap-20
          "
        >
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold md:text-3xl">23</h2>
            <p className="text-base lg:text-lg">Project Challenges</p>
          </div>

          <div className="text-center">
            <h2 className="text-white text-2xl font-bold md:text-3xl">500</h2>
            <p className="text-base lg:text-lg">Children and family reached</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressImpact;
