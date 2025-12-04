'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Interface defining the structure of an activity object.
 */
interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

/**
 * Array of activity objects, including the newly requested entry.
 */
const activities: Activity[] = [
  {
    id: 'garden',
    title: 'School Garden Sessions',
    description:
      'We offer hands-on gardening skills by teaching children how to plant, nurture, and water seeds such as cucumbers, tomatoes, and other vegetables. They learn the importance of creating garden beds and how to properly plant seeds for optimal growth. Through this experience, children develop an understanding of plant care, from soil preparation to harvesting. Our school garden program emphasizes responsibility, patience, and teamwork, as children actively engage with nature.',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120141_1.png',
    icon: '🌱',
  },
  {
    id: 'nutrition',
    title: 'Nutrition Education',
    description:
      'Nutrition education plays a vital role in teaching individuals, especially children, the importance of making healthy food choices. Through engaging lessons and hands-on activities, children learn about the different food groups, balanced diets, portion control, and the nutritional benefits of various fruits and vegetables. They also gain knowledge on how to read food labels, understand the impact of sugar and fats, and develop habits that support long-term health and wellness.',
    image: '/assets/Program/vacation/nutri-edu.jpg',
    icon: '🍎',
  },
  {
    id: 'exercise',
    title: 'Physical Exercise',
    description:
      'Exercise is essential for maintaining a healthy body and mind, especially for children. Regular physical activity helps build strong muscles and bones, improves cardiovascular health, and enhances coordination and flexibility. Through fun activities like running, jumping, playing sports, and dancing, children develop important motor skills while staying active.',
    image: '/assets/Program/vacation/IMG-20210710-WA0003.jpg',
    icon: '🏃‍♂️',
  },
  // --- New Activity Added ---
  {
    id: 'creative-games',
    title: 'Creative Games and Learning Activities',
    description:
      'These sessions encourage imagination, problem-solving, and cognitive development through engaging and fun activities. Children participate in arts and crafts, storytelling, building challenges, and group games designed to foster creativity and critical thinking. They learn to express themselves, collaborate with peers, and apply their knowledge in exciting, non-traditional ways, making learning an enjoyable adventure.',
    image: '/assets/Program/vacation/creative.png', // Remember to update this path
    icon: '🎨',
  },
];

/**
 * React Functional Component for the Activities Section.
 * Renders a list of activities with alternating layouts.
 */
const ActivitiesSection: React.FC = () => {
  return (
    
    <section className="relative bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {activities.map((activity: Activity, index: number) => (
          <article
            key={activity.id}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            } items-center gap-8 lg:gap-12 bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border-t-4 border-green-800`}
          >
           

            {/* Icon bubble */}
            <div
              className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white shadow-md ${
                index % 3 === 2
                  ? 'bg-green-200'
                  : index % 2 === 1
                  ? 'bg-green-200'
                  : 'bg-green-200'
              }`}
            >
              {activity.icon}
            </div>

            {/* Image */}
            <div className="shrink-0 w-full md:w-120 h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={activity.image}
                alt={activity.title}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-800 relative inline-block">
                {activity.title}
                <span
                  className={`block h-1 w-16 mt-2 rounded ${
                    index % 3 === 2
                      ? 'bg-green-400'
                      : index % 2 === 1
                      ? 'bg-green-400'
                      : 'bg-green-400'
                  }`}
                ></span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {activity.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;