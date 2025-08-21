import React from 'react';
import styles from './AmplifiedKitchen.module.css';
import Image from 'next/image';

const AmplifiedKitchen: React.FC = () => {
  return (
    <section className={styles.kitchenSection}>
      <div className={styles.kitchenHeader}>
        <h2><span>Amplified</span> Kitchen</h2>
      </div>

      <div className={styles.kitchenContent}>
        <div className={styles.kitchenText}>
          <h2>KNGVS Amplified Nutri-kitchen</h2>
          <p>
            This exciting and highly engaging activity took place every Wednesday throughout the month of August,
            in the Department of Human Nutrition and Dietetic kitchen and in collaboration with O’beth treats,
            Ibadan. Mrs Elizabeth Shotunde, CEO, Master Chef and gardening enthusiast, inspired and brought to life
            KNGVS ‘Amplified Nutri-kitchen’. This new feature of KNGVS brought together children, youths, and adults
            (parents) to learn hands-on and gain creative skills to prepare simple, healthy, and tasty meals with
            veggies and fruits.
          </p>
        </div>
        <div className={styles.kitchenImage}>
          <Image src="./images/KNGVS Pro_20240912_144212_1.png" 
          alt="Amplified Kitchen" 
          width={200} 
        height={200}/>
        </div>
      </div>
    </section>
  );
};

export default AmplifiedKitchen