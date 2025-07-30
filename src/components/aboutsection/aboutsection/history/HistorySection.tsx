import React from "react";
import styles from "./HistorySection.module.css";


const HistorySection: React.FC = () => {
  return (
    <div className={styles.history}>
      <div className={styles.text}>
        <div className={styles.hero_text}>
          <div className={styles.line}>
            <div className={styles.vertical_line}></div>
            <h2>Our History</h2>
          </div>
        </div>
        <p>
          Our journey began as a small project aimed at addressing malnutrition, a growing concern in our country.
          Recognizing the importance of early intervention, we set out to integrate nutrition education into children's
          lives from the very beginning. Our vision was simple: to reduce the risk of malnutrition by teaching kids
          about healthy food choices through hands-on experiences in gardening and cooking.
          <br />
          <br />
          What started as a local initiative quickly grew into a full-fledged program, offering activities like vacation
          schools, volunteer training, amplified kitchen workshops, and an annual exhibition. Each element of our
          program is designed to nurture children who not only understand the value of nutrition but also carry these
          lessons into adulthood.
          <br />
          <br />
          Today, we continue to expand our reach, empowering young minds and fostering a generation that is mindful of
          their health and the impact of sustainable food practices on their well-being.
        </p>
      </div>
      <div className={styles.image}>
        <img src='/assets/about/history/pioneer nutri-garden kids.JPG' alt="Pioneer Nutri-Garden Kids" />
      </div>
    </div>
  );
};

export default HistorySection;
