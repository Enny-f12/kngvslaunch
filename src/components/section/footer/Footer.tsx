import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer} id="footer">
        <div className={styles.caps}>
          <div className={styles.phase}>
            <img src="/assets/sidebar/logo.jpg" alt="Kids Nutri Garden Logo" className={styles.logo} />
            <h2>Kids Nutri Garden</h2>
          </div>
          <p>Nurturing Generation Of Healthy Eaters; Grow It, Cook It, Love It.</p>
        </div>

        <div className={styles.about}>
          <h3>About</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div className={styles.categories}>
          <h3>Categories</h3>
          <ul>
            <li><a href="">Annual Exhibition</a></li>
            <li><a href="">Trainings</a></li>
            <li><a href="">Amplified Kitchen</a></li>
            <li><a href="">Vacation School</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>
          <ul>
            <li>University of Ibadan</li>
            <li>+23470986547</li>
            <li>kidsnutrigarden@gmail.com</li>
          </ul>

          <div className={styles.socialLinks}>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/kids-nutri-garden-school/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn color='#0077B5' />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+2348056014140" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kidsnutrigarden_ng?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram  color="#e1306c"/>
                </a>
              </li>
              <li>
                <a href="https://vm.tiktok.com/ZMkhdX2tV/" target="_blank" rel="noopener noreferrer">
                  <FaTiktok color="#fffff"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
