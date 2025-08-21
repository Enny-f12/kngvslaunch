import React from 'react';
import Link from 'next/link'; // Or from 'react-router-dom' if you're not using Next.js
import styles from './Home.module.css';

const WorldFoodDay: React.FC = () => {
  return (
    <div className={styles.wfdContainer}>
      <div className={styles.intro}>
        <h2>World Food Day</h2>
        <p>
          World Food Day, celebrated annually on October 16th, is a global
          event established by the Food and Agriculture Organization (FAO) of
          the United Nations in 1979. The day aims to raise awareness of food
          security, sustainable agricultural practices, and the fight against
          hunger worldwide. With themes that address critical issues such as
          poverty, climate change, and healthy eating, World Food Day unites
          governments, organizations, and individuals to advocate for actions
          that create a better, hunger-free world.
        </p>
        <p>
          Over the years, Kids Nutri Garden has proudly participated in the
          World Food Day, aligning its mission with WFD's objectives. Through
          this partnership, Kids Nutri Garden has participated in various
          events and initiatives, leveraging its expertise in promoting
          nutrition education and sustainable gardening. These collaborative
          efforts have helped create impactful programs aimed at empowering
          communities, fostering food literacy, and supporting the global goal
          of achieving food security for all.
        </p>
        <p>Click here to view the detailed activities and events over the years.</p>
      </div>

      <div className={styles.years}>
        <Link href="/wfd/wfdone" className={styles.yearLink}>
          2023
        </Link>
        <Link href="/wfd/wfdtwo" className={styles.yearLink}>
          2024
        </Link>
      </div>
    </div>
  );
};

export default WorldFoodDay;
