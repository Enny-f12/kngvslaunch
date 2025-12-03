import React from 'react';

// =================================================================================
// --- AdvocacySection Component (Tailwind CSS Conversion) ---
// This component details the organization's advocacy efforts and partnership strategies.
// =================================================================================
const AdvocacySection: React.FC = () => {
  return (
    // Replicating the section styling from AdvisoryBoardSection
    <section className="w- mx-auto px-6 bg-white text-gray-800 mt-15 lg:mt-10 py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10">

        {/* Title Block */}
        <h2 className="text-4xl md:text-5xl font-semibold flex item-center justify-center">
          Our <span className="text-green-600 ml-2">Advocacy</span>
        </h2>
        
        {/* Body Text */}
        <div className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl">
          <p>
            At Kids Nutri Garden, <b>advocacy is at the core</b> of what we do. We believe in the power of partnerships and collaboration to drive positive change in the communities we serve. Our advocacy efforts are focused on building strong relationships with brands, organizations, and government bodies, encouraging them to support our initiatives and work alongside us to create meaningful impact.
          </p>

          <br />

          <p>
            We advocate by reaching out to potential partners through well-researched proposals and personal engagements. Our goal is to align our mission with the values and objectives of these stakeholders, demonstrating how their support can make a real difference. Whether it&#39;s securing funding, resources, or technical expertise, we ensure that every partnership we build is mutually beneficial and driven by shared goals.
          </p>

          <br />

          <p>
            By working closely with governments, we aim to address critical societal issues such as education, health, and community development. Through our advocacy efforts, we present evidence-based proposals that highlight how our programs can contribute to policy objectives and public welfare.
          </p>

          <br />

          <p>
            We also seek partnerships with brands and other organizations that are committed to social responsibility. By aligning with their Corporate Social Responsibility (CSR) strategies, we help them extend their impact while furthering our mission. Our proposals highlight the mutual benefits of working together, ensuring that every collaboration enhances the brand’s image and delivers measurable results.
          </p>

          <br />

          <p>
            Through continuous engagement and advocacy, we strive to create lasting partnerships that allow us to expand our reach and make a sustainable difference. If your organization or brand is interested in supporting our initiatives, we invite you to reach out. Together, we can create change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;