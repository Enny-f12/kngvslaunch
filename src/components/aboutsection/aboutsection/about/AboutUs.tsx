import React from 'react';
import styles from './AboutUs.module.css';
import Image from 'next/image';

const AboutUs:React.FC = () => {
  return (
    <section>
      <div className={styles.landing}>
        <h1>About Us</h1>
      </div>

      <div className={styles.story}>
        <div className={styles.text}>
          <div className={styles.heroText}>
            <div className={styles.line}>
              <div className={styles.verticalLine}></div>
              <h3>How It Started</h3>
            </div>
          </div>
          <p>
            Kids Nutri-garden™ Vacation School, is an innovative and unconventional annual community service project
            organised in the Department of Human Nutrition and Dietetics, University of Ibadan (UI), Nigeria since 2016
            during the long vacation of primary schools in Nigeria (August to September).
            <br />
            <br />
            For seven years, KNGVS™ has created opportunities and participatory learning experiences for children to
            learn through play, hands-on gardening and cooking activities about nutrition and how it relates to their
            well-being and environment. This programme also helps children and youths learn how to build environmental
            literacy, creativity, critical thinking, problem-solving, entrepreneurship skills, social skills, and other
            life skills through creatively curated lesson plans implemented in outdoor nutri-garden classes.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/assets/about/aboutsection/happy kids parents and facilitators after prog.jpg"
            alt="Happy kids, parents and facilitators"
            width={3264}
            height={2448}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
