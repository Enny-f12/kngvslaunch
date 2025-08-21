import React from "react";
import styles from "./MissionSection.module.css";
import Image from "next/image";
const MissionSection: React.FC = () => {
  return (
    <div className={styles.mission}>
      <div className={styles.image}>
        <Image src='/assets/about/mission/DSC08067.JPG' 
        alt="Children in Garden" 
        width={200} 
        height={200}/>
      </div>
      <div className={styles.text}>
        <div className={styles.hero_text}>
          <div className={styles.line}>
            <div className={styles.vertical_line}></div>
            <h2>Our Mission</h2>
          </div>
        </div>
        <p>
          Our mission: To nurture generations of healthy eaters! in order to
          insure and add value to a Healthier, Greener Future for Our Children
          as we ’catch them young’. <br /> <br />
          <strong>Goal 1:</strong> to contribute to food system transformation
          and cultivate healthy eating habits especially the consumption of
          vegetables through hands-on garden-based nutrition education. <br />
          <br />
          <strong>Goal 2:</strong> to provide outdoor participatory/ hands-on
          learning to build environmental literacy, creativity, critical
          thinking, problem-solving, and entrepreneurship skills. <br /> <br />
          <strong>Our vision:</strong> To insure and add value to a healthier
          future and environment for children to thrive against disease and
          other developmental challenges.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
