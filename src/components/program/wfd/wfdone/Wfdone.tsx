import React from 'react';
import styles from './Wfdone.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const WFDKNGVSPage = () => {
  const firstRowImages = [
    'KNGVS Pro_20241223_083343_1.png',
    'KNGVS Pro_20241223_083218_1.png',
    'KNGVS Pro_20241223_083340_1.png',
    'KNGVS Pro_20241223_083400_1.png',
  ];

  const secondRowImages = [
    'KNGVS Pro_20241223_083410_1.png',
    'KNGVS Pro_20241223_083316_1.png',
    'KNGVS Pro_20241223_083357_1.png',
    'KNGVS Pro_20241223_083252_1.png',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link href="/wfd" className={styles.backLink}>
          <FaArrowLeft size={24} />
        </Link>
        <h2>World Food Day KNGVS Event</h2>
      </div>

      <section className={styles.home}>
        <Image
          src="/images/KNGVS Pro_20241223_083155_1.png"
          alt="KNGVS WFD"
          width={800}
          height={500}
          className={styles.heroImage}
        />
        <p>
          KNGVS in collaboration with the Association of Nutrition Science Students (ANSS), Dept. of Human Nutrition and Dietetics
          participated in the global celebrations of the FAO’s World Food Day (October 16, 2023) with the theme:
          <strong> "Water is Life, Water is Food. Leave No One Behind."</strong>
          <br /><br />
          From 26 to 30 October, our team of 25 dedicated volunteers visited four schools, engaging over 200 pupils and 30 teachers.
          Activities included FAO videos, gardening, water filtration experiments, poster contests, singing, and dancing — all to
          spotlight water’s vital role in food and life.
        </p>
      </section>

      <section className={styles.schools}>
        <h3>Schools Visited</h3>
        <ul>
          <li>Kings and Queens Primary School, Ashi – 46 pupils & 10 teachers</li>
          <li>Bumble Bee Elementary School, New Bodija – 50 pupils & 7 teachers</li>
          <li>VASTAB Mega Primary School, Old Bodija – 75 pupils & 10 teachers</li>
          <li>Tekhols Primary School, Bashorun – 40 pupils & 7 teachers</li>
        </ul>
      </section>

      <section className={styles.say}>
        <p>
          <em>
            By fostering awareness and encouraging a sense of responsibility towards water resources, we strive to
            contribute to a sustainable and food-secure future.
          </em>
        </p>
      </section>

      <section className={styles.photo}>
        <h2>Photo Splash: World Food Day Activities</h2>
        <div className={styles.galleryRow}>
          {firstRowImages.map((img, i) => (
            <Image
              key={i}
              src={`/images/${img}`}
              alt={`WFD activity ${i + 1}`}
              width={300}
              height={200}
              className={styles.galleryImage}
            />
          ))}
        </div>
        <div className={styles.galleryRow}>
          {secondRowImages.map((img, i) => (
            <Image
              key={i}
              src={`/images/${img}`}
              alt={`WFD activity ${i + 5}`}
              width={300}
              height={200}
              className={styles.galleryImage}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WFDKNGVSPage;
