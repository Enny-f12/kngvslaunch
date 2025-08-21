import React from 'react';
import styles from './PartnersSchool.module.css';
import Image from 'next/image';
interface PartnerSchool {
  id: string;
  name: string;
  image: string;
}

const partnerSchools: PartnerSchool[] = [
  {
    id: '1',
    name: 'Vastab Mega School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120334_1.png'
  },
  {
    id: '2',
    name: 'Ebenezer Primary School',
    image: '/assets/Program/vacation/KNGVS Pro_20240909_000317_1.png'
  },
  {
    id: '3',
    name: 'Moniya Ibadan',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120323_1.png'
  },
  {
    id: '4',
    name: 'Bumble Bee School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120349_1.png'
  },
  {
    id: '5',
    name: 'Betsy School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120330_1.png'
  },
  {
    id: '6',
    name: 'Tekhol School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120346_1.png'
  },
  {
    id: '7',
    name: 'Kings and Queens Primary School',
    image: '/assets/Program/vacation/KNGVS Pro_20240910_120308_1.png'
  }
];

const PartnerSchools: React.FC = () => {
  return (
    <section className={styles.partnersContainer}>
      <div className={styles.partnersWrapper}>
        <h2 className={styles.partnersTitle}>
          Schools Partnered With
        </h2>

        <div className={styles.partnersGrid}>
          {partnerSchools.map((school) => (
            <article key={school.id} className={styles.partnerCard}>
              <div className={styles.partnerImageContainer}>
                <Image
                  src={school.image}
                  alt={`${school.name} logo or building`}
                  className={styles.partnerImage}
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className={styles.partnerName}>
                {school.name}
              </h3>
            </article>
          ))}
        </div>

        <div className={styles.partnersStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7+</span>
            <span className={styles.statLabel}>Partner Schools</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Children Reached</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Fun Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSchools;