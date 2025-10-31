import React from "react";
import styles from "./GetInvolved.module.css";

const GetInvolved: React.FC = () => {
  return (
    <div className={styles.get_involved}>
      <div className={styles.get_involved_text}>
        <div className={styles.line}>
          <div id={styles.vertical_line}></div>
          <h2>Get Involved</h2>
        </div>
      </div>

      <div className={styles.get_button}>
        <div className={styles.p}>
          <p>
            Join us in making a difference! Support our kids`&apos;` nutrition garden
            program through volunteering, donations, or partnerships. Together,
            we can inspire healthy habits and empower children to grow and
            thrive.
          </p>
        </div>

        <div className={styles.button}>
          <a className={styles.volunteer} href="https://wa.me/+2348056014140">
            Volunteer
          </a>
          <a className={styles.support} href="https://wa.me/+2348056014140">
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
