import React from "react";

const GetInvolved: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-0 lg:mt-30 bg-linear-to-b from-white via-green-100 to-green-200 py-10 md:py-28 items-center justify-center">
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row px-6 md:px-12 lg:px-8 '>
      {/* Text Section */}
      <div className="flex flex-col">
      <div className="mb-2 md:mb-4 text-left">
          <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
          <h2 className=" text-4xl md:text-5xl font-semibold">
            Get Involved
          </h2> 
        </div>
      </div>
       <p className="text-lg md:text-xl leading-relaxed">
          Join us in making a difference! Support our kids&apos; nutrition garden
          program through volunteering, donations, or partnerships. Together,
          we can inspire healthy habits and empower children to grow and thrive.
        </p>
        </div>
      {/* Button & Paragraph Section */}
      <div className="flex flex-col w-full md:w-4/5 gap-5 ">
       

        <div className="flex flex-col gap-6 mt-8 items-center justify-center">
          <a
            href="https://wa.me/+2348056014140"
            className="w-50 inline-block px-15 py-3 rounded-lg font-medium text-gray-50 bg-green-600 hover:bg-green-900 hover:scale-110 transition-transform text-center"
          >
            Volunteer
          </a>
          <a
            href="https://wa.me/+2348056014140"
            className="w-50 inline-block px-15 py-3 rounded-lg font-medium text-gray-700 bg-gray-100 border border-green-600 hover:bg-green-900 hover:text-gray-50 hover:scale-110 transition-transform text-center"
          >
            Support
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GetInvolved;
