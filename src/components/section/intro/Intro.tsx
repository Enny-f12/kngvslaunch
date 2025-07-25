import React from 'react';
import styles from './Intro.module.css';



const Intro: React.FC = () => {
  return (
    <div className={styles.subsection}>
      <div className={styles.subsection_text}>
        <div className={styles.line}>
          <div id={styles.vertical_line}></div>
          <h2>
            Welcome to <span style={{ color: '#159c09' }}>KNGVS</span>
          </h2>
        </div>
        <p>
          For seven years, KNGVS™ has created opportunities and participatory learning experiences for
          children to learn through play, hands-on gardening and cooking activities about nutrition and how
          it relates to their well-being and environment. This programme also helps children and youths
          learn how to build environmental literacy, creativity, critical thinking, problem-solving,
          entrepreneurship skills, social skills, and other life skills through creatively curated lesson plans
          implemented in out-door nutri-garden classes.
        </p>
      </div>

      <div className={styles.frames}>
        <div className={styles.nut} style={{ backgroundImage: `url("/assets/intro/KNGVS Pro_20240910_120141_1.png")` }}>
          <h1>
            Grow  it
          </h1>
        </div>
        <div className={styles.edu} style={{ backgroundImage: `url("/assets/intro/KNGVS Pro_20240909_000128_1.png")` }}>
          <h1>
            Cook it
          </h1>
        </div>
        <div className={styles.dev} style={{ backgroundImage: `url("/assets/intro/KNGVS Pro_20240909_000141_1.png")` }}>
          <h1>
            Love it
          </h1>
        </div>
        <div className={styles.dov} style={{ backgroundImage: `url(/assets/intro/83ecb95f-2ae3-4067-b23a-c6cd72717a8c.jpg)` }}>
          <h1>
            Sustain it
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;