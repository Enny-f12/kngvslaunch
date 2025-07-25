import React from 'react';
import styles from './Partners.module.css';

const partnerLogos = [
  '/assets/partners/NIHORT official logo.jpg',
  '/assets/partners/KNGVS Pro_20240909_000303_1.png',
  '/assets/partners/KNGVS Pro_20240909_000235_1.png',
  '/assets/partners/KNGVS Pro_20240910_120419_1.png',
  '/assets/partners/FRIN official logo.jpg',
  '/assets/partners/KNGVS Pro_20240909_000252_1.png',
  '/assets/partners/KNGVS Pro_20240909_000246_1.png',
  '/assets/partners/KNGVS Pro_20240910_120422_1.png',
  '/assets/partners/KNGVS Pro_20240910_120405_2.png',
];


const PartnersSection: React.FC = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.text}>
        <div className={styles.line}>
          <div className={styles.verticalLine}></div>
          <h2>Our Partners</h2>
        </div>
        <p>
          Our partners are key to the success of our kids' nutrition garden program. Collaborating with local schools,
          community groups, and nutrition experts, they provide resources and expertise that enhance our vacation school,
          volunteer training, amplified kitchen, and annual exhibition. Together, we promote healthy eating,
          sustainability, and community engagement, empowering children to build lifelong food skills.
        </p>
      </div>

      <div className={styles.logoSlider}>
        <div className={styles.logoSlide}>
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <img key={index} src={logo} alt={`partner-logo-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
