import React from 'react';
import styles from './ActivitiesSection.module.css';
import Image from 'next/image';
interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const activities: Activity[] = [
  {
    id: 'garden',
    title: 'School Garden',
    description: 'We offer hands-on gardening skills by teaching children how to plant, nurture, and water seeds such as cucumbers, tomatoes, and other vegetables. They learn the importance of creating garden beds and how to properly plant seeds for optimal growth. Through this experience, children develop an understanding of plant care, from soil preparation to harvesting. Our school garden program emphasizes responsibility, patience, and teamwork, as children actively engage with nature. In addition to gardening, they also gain valuable knowledge about the benefits of fresh, homegrown produce, promoting healthy eating habits and a lifelong appreciation for the environment.',
    image:'/assets/Program/vacation/KNGVS Pro_20240910_120141_1.png',
    icon: '🌱'
  },
  {
    id: 'nutrition',
    title: 'Nutrition Education',
    description: 'Nutrition education plays a vital role in teaching individuals, especially children, the importance of making healthy food choices. Through engaging lessons and hands-on activities, children learn about the different food groups, balanced diets, portion control, and the nutritional benefits of various fruits and vegetables. They also gain knowledge on how to read food labels, understand the impact of sugar and fats, and develop habits that support long-term health and wellness. By promoting nutritious eating from a young age, nutrition education encourages the adoption of lifelong healthy eating patterns, reduces the risk of chronic diseases, and improves overall well-being. It empowers children to make informed decisions about their diets, contributing to both their physical and mental development.',
    image: '/assets/Program/vacation/IMG-20230822-WA0143.jpg',
    icon: '🍎'
  },
  {
    id: 'exercise',
    title: 'Lots of Exercise',
    description: 'Exercise is essential for maintaining a healthy body and mind, especially for children. Regular physical activity helps build strong muscles and bones, improves cardiovascular health, and enhances coordination and flexibility. Through fun activities like running, jumping, playing sports, and dancing, children develop important motor skills while staying active. Exercise also helps boost mood, reduce stress, and improve concentration, which can enhance academic performance. By incorporating lots of exercise into their daily routine, children are better equipped to maintain a healthy weight and reduce the risk of chronic diseases later in life. Encouraging children to participate in regular physical activity fosters a lifelong appreciation for fitness, leading to healthier, more active lifestyles as they grow.',
    image:'/assets/Program/vacation/IMG-20210710-WA0003.jpg' ,
    icon: '🏃‍♂️'
  }
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className={styles.activitiesContainer}>
      <div className={styles.activitiesWrapper}>
        {activities.map((activity) => (
          <article key={activity.id} className={styles.activityCard}>
            <div className={styles.activityIcon}>
              {activity.icon}
            </div>
            <div className={styles.activityImageContainer}>
              <Image
                src={activity.image}
                alt={activity.title}
                className={styles.activityImage}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.activityContent}>
              <h2 className={styles.activityTitle}>
                {activity.title}
              </h2>
              <p className={styles.activityDescription}>
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