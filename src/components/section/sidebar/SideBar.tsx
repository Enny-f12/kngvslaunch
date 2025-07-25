'use client';
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import {
  FaDesktop, FaCircleQuestion, FaElementor,
  FaBookOpen, FaNewspaper, FaAngleRight,
  FaXmark
} from 'react-icons/fa6';



const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmenu = (menu: string) => {
    setOpenSubmenu(prev => (prev === menu ? null : menu));
  };

  return (
    <>
      <div className={styles.menuBtn} onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`}>
        <header className={styles.header}>
          <div className={styles.closeBtn} onClick={toggleSidebar}>
            <FaXmark />
          </div>
          <img src="/assets/sidebar/logo.jpg" alt="Kids Nutri Garden" />
          <h1>Kids Nutri Garden</h1>
        </header>

        <div className={styles.menu}>
          <div className={styles.item}>
            
            <a href="/"><FaDesktop /> Home</a>
          </div>

          <div className={styles.item}>
            <a onClick={() => handleSubmenu('about')}>
              <FaCircleQuestion /> About Us <FaAngleRight className={openSubmenu === 'about' ? styles.rotate : ''} />
            </a>
            {openSubmenu === 'about' && (
              <div className={styles.subMenu}>
                <a href="/aboutus">About Us</a>
                <a href="/team">Our Team</a>
                <a href="/advisory">Advisory Board</a>
                <a href="/contact">Contact</a>
              </div>
            )}
          </div>

          <div className={styles.item}>
            <a onClick={() => handleSubmenu('programs')}>
              <FaElementor /> Our Programs <FaAngleRight className={openSubmenu === 'programs' ? styles.rotate : ''} />
            </a>
            {openSubmenu === 'programs' && (
              <div className={styles.subMenu}>
                <a href="/vacation">Vacation School</a>
                <a href="/training">Trainings</a>
                <a href="/exhibition">Annual Exhibition</a>
                <a href="/advocacy">Advocacy</a>
                <a href="/amplified">Amplified Kitchen</a>
                <a href="/wfd">World Food Day</a>
              </div>
            )}
          </div>

          <div className={styles.item}>
            <a onClick={() => handleSubmenu('news')}>
              <FaNewspaper /> News & Report <FaAngleRight className={openSubmenu === 'news' ? styles.rotate : ''} />
            </a>
            {openSubmenu === 'news' && (
              <div className={styles.subMenu}>
                <a href="/report">Annual Report</a>
                <a href="/newsletter">Newsletter</a>
                <a href="/gallery">Our Gallery</a>
                <a href="/wfd">World Food Day</a>
                <a href="/panel">Panel Discussion</a>
                <a href="/toolkit">Toolkit Launch</a>
                <a href="/sgc">SGC</a>
              </div>
            )}
          </div>

          <div className={styles.item}>
            <a onClick={() => handleSubmenu('resources')}>
              <FaBookOpen /> Resources <FaAngleRight className={openSubmenu === 'resources' ? styles.rotate : ''} />
            </a>
            {openSubmenu === 'resources' && (
              <div className={styles.subMenu}>
                <a href="/curriculum">Curriculum</a>
                <a href="/toolkit">Toolkit</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
