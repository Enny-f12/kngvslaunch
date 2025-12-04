'use client';
import React from 'react';
import Image from 'next/image';

const TrainingIntroSection: React.FC = () => (
    // ... (Section and container classes remain the same)
    <section className="w-full  bg-gray-50 text-gray-900">

        <div className="max-w-6xl mx-auto px-6 md:px-12">

            <div className="text-center mt-10 md:mt-15 lg:mt-30 text-black">
                <h1 className="text-5xl md:text-6xl font-bold mb-12 ">Volunteer <span className="text-green-600">Training</span></h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Text Container */}
                <div className="text-container">
                    <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
                        <div className="w-10 md:w-2 h-1 md:h-10 bg-[#159c09]"></div>
                        <h2 className="text-3xl md:text-3xl font-semibold">
                            Garden Based Learning and Nutrition Education
                        </h2>
                    </div>

                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg z-10">
                        At Kids Nutri Garden, we believe in empowering our volunteers. We offer comprehensive training focused on garden-based learning and nutrition education, equipping volunteers with practical techniques to integrate gardening into educational settings.
                    </p>
                    <br />

                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg z-10">
                        Through these hands-on workshops, volunteers learn to manage gardens, teach sustainable practices, and promote healthy eating habits, inspiring others to understand the link between nutrition and well-being.
                    </p>
                </div>

                {/* Image Container */}
                <div className="imageContainer">
                    <Image
                        src="/assets/Program/training/IMG-20240725-WA0050.jpg"
                        alt="A volunteer training session in a garden"
                        className="w-full h-[250px] md:h-[450px] object-cover rounded-xl shadow-2xl"
                        width={600}
                        height={450}
                        // ❌ ERROR LINE FIXED: Use console.log or console.error
                        onError={(e) => {
                            console.error('Image failed to load:', e.currentTarget.src);
                            // Optionally set a fallback image source:
                            e.currentTarget.src = 'https://placehold.co/400x450/cccccc/FFFFFF?text=Error';
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
);

export default TrainingIntroSection;