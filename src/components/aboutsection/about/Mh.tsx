import React from 'react'

const Mh = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 max-w-6xl mt-30 mx-auto px-6 lg:px-0 '>
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
            kitchen workshops, and an annual exhibition.
            
          </p>
        </div>

    </div>
  )
}

export default Mh