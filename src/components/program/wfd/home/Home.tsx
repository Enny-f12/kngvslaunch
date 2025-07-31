// components/WorldFoodDay.tsx
'use client';
import styles from "./Home.module.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const WorldFoodDay: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <h2>World Food Day</h2>
        <p>
          World Food Day, celebrated annually on October 16th, is a global event established by the Food and Agriculture Organization (FAO) of the United Nations in 1979. The day aims to raise awareness of food security, sustainable agricultural practices, and the fight against hunger worldwide.
          <br />
          <br />
          With themes that address critical issues such as poverty, climate change, and healthy eating, World Food Day unites governments, organizations, and individuals to advocate for actions that create a better, hunger-free world.
          <br />
          <br />
          Over the years, Kids Nutri Garden has proudly participated in World Food Day, aligning its mission with WFD's objectives. Through this partnership, Kids Nutri Garden has contributed to impactful programs that promote nutrition education, sustainable gardening, and food literacy in communities.
          <br />
          <br />
          <a href="/wfd-events" className={styles.link}>Click here to view our yearly activities and events</a>
        </p>
      </div>

      <div className={styles.years}>
        <button onClick={() => navigate("/wfd2023")}>2023</button>
        <button onClick={() => navigate("/wfd2024")}>2024</button>
      </div>
    </section>
  );
};

export default WorldFoodDay;
