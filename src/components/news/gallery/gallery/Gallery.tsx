import React from 'react';
import styles from './Gallery.module.css';
import  Link  from 'next/link'

const GalleryLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gal}>
        <h2>Pictures Over The Years</h2>
      </div>

      <p className={styles.paragraph}>
        Click below to view the pictures over the years
      </p>

      <div className={styles.years}>
        <Link href="/gallery/galleryone">2021</Link>
        <Link href="/gallery/gallerytwo">2022</Link>
        <Link href="/gallery/gallerythree">2023</Link>
      </div>
    </div>
  );
};

export default GalleryLinks;
