import React from 'react';
import styles from './ProgressImpact.module.css';

const ProgressImpact: React.FC = () => {
  return (
    <div className={styles.story_2}>
      <div className={styles.text}>
        <h3>Progress and Impacts Made So Far</h3>
        <br />
        <p>
          We have made progress over the years, teaching thousands of children to grow their own
          vegetables and make healthier food choices, fostering lifelong healthy eating habits
          through fun, hands-on gardening and nutrition activities.
        </p>
      </div>

      <div className={styles.grade}>
        <div className={styles.grade_1}>
          <div className={styles.one}>
            <h2>8</h2>
            <p>School partnership</p>
          </div>
          <div className={styles.one}>
            <h2>500</h2>
            <p>Community members reached</p>
          </div>
        </div>

        <div className={styles.grade_1}>
          <div className={styles.one}>
            <h2>23</h2>
            <p>Project Challenges</p>
          </div>
          <div className={styles.one}>
            <h2>500</h2>
            <p>Children and family reached</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressImpact;
