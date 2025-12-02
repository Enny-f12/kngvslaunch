import React from "react";

const AdvisoryBoardSection: React.FC = () => {
  return (
    <section className="w-full px-6 bg-white text-gray-800 mt-15 lg:mt-30">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* Title Block */}
       
          <h2 className="text-4xl md:text-5xl font-semibold flex item-center justify-center">
            Advisory <span className="text-green-600 ml-2"> Board</span>
          </h2>
        

        {/* Body Text */}
        <div className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl">
          <p>
            Our Advisory Board is essential to the success of our kids’ nutrition
            garden program. Composed of experts in nutrition, education,
            agriculture, and community engagement, the board provides valuable
            guidance to ensure our initiatives remain impactful. With diverse
            backgrounds in child development, health, and sustainable food
            practices, they help shape the direction of our programs.
          </p>

          <br />

          <p>
            The board plays a key role in curriculum development, offering
            strategic insights to keep our programs relevant and effective. They
            also provide oversight in program evaluation and community outreach,
            ensuring we meet our goals of fostering healthy eating habits and
            reducing malnutrition in children. Their commitment strengthens our
            ability to empower children with the skills and knowledge they need
            to make healthy, informed choices throughout their lives.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AdvisoryBoardSection;
