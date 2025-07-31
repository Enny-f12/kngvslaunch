import React from 'react';
import styles from './Vacation.module.css';

const VacationHero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.decorativeElements}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Vacation School
        </h1>
        <p className={styles.heroDescription}>
          The Kids Nutri-Garden Vacation School engages children in hands-on learning about nutrition, exercise, and gardening. Through fun activities, children learn healthy eating habits, the benefits of physical activity, and how to grow their own fruits and vegetables. The program fosters a connection to nature, encourages healthy food choices, and promotes wellness through active gardening, creating a fun and educational environment for children to embrace nutritious lifestyles.
        </p>
        <div className={styles.heroActivities}>
          <h2 className={styles.activitiesTitle}>
            Our Activities Include:
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VacationHero;