// components/OurPrograms.tsx
import React from 'react';
import styles from './OurPrograms.module.css';
import { FaArrowRight } from 'react-icons/fa';

const programs = [
  {
    title: 'Vacation School',
    link: 'vacation.html',
    image: '/assets/programs/IMG-20230822-WA0145.jpg',
  },
  {
    title: 'Volunteer Training',
    link: 'training.html',
    image: '/assets/programs/IMG-20240723-WA0008.jpg',
  },
  {
    title: 'Amplified Kitchen',
    link: 'amplified.html',
    image: '/assets/programs/Aunty Debbie KNGVS 2021.jpg',
  },
  {
    title: 'Annual Exhibition',
    link: 'exhibition.html',
    image: '/assets/programs/KNGVS Pro_20240910_151717_1.png',
  },
];

const OurPrograms: React.FC = () => {
  return (
    <section className={styles.programs}>
      <div className={styles.programsText}>
        <div className={styles.subsectionText}>
          <div className={styles.line}>
            <div className={styles.verticalLine}></div>
            <h2>Our Programs</h2>
          </div>
          <p>
            Our kids' nutrition garden program is a dynamic, hands-on initiative aimed at fostering healthy eating habits and a deeper understanding of sustainable food practices in children. Through engaging activities such as vacation school, volunteer training, and immersive amplified kitchen experiences, kids learn to cultivate, cook, and appreciate fresh, nutritious produce. The program culminates in an exciting annual exhibition where participants showcase their newfound knowledge and skills. By connecting children to the source of their food, we inspire lifelong healthy habits while encouraging environmental stewardship, teamwork, and a love for gardening and nutrition.
          </p>
        </div>

        <div className={styles.framesTwo}>
          {programs.map(({ title, link, image }) => (
            <div className={styles.card} key={title}>
              <img src={image} alt={title} />
              <h3>
                <a href={link}>
                  {title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
