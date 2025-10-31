// HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/assets/herosection/1ad4bac4-4594-4e45-a2a5-858ee8e63b85.jpg"
        alt="Children gardening"
        className={styles.heroImage}
        width={1024}
        height={768}
      />

      <div className={styles.heroText}>
        <div className={styles.line}>
          <div className={styles.verticalLine}></div>
          <h2>Who we are</h2>
        </div>
        <p>
          Our mission is to contribute to food system transformation by cultivating healthy eating habits
          through fun, hands-on garden-based nutrition education and create an environment where
          children can thrive against diseases and other developmental health challenges. <br />
          Our vision is to build generations of healthy eaters in order to ensure and add value to a
          healthier, greener future for our children as we `&quot;`catch them young`&quot;`.
        </p>
        <div className={styles.buttonWrapper}>
          <a href="/about" className={styles.cta}>
            Learn more <FaArrowRight size={16} color="#159c09" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
